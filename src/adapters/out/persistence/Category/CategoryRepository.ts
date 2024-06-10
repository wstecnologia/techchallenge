import Category from "@/core/category/domain/entities/Category"
import ICategoryRepository from "@/core/category/ports/out/ICategoryRepository"
import db from "../DB/db"
import Id from "@/core/shared/Id"

export default class CategoryRepository implements ICategoryRepository {
  public async registerCategory(category: Category): Promise<void> {
    await db.query(
      `INSERT INTO Category (id, name, description)
         VALUES ($1, $2, $3)`,
      [Id.gerar(), category.name, category.description],
    )
  }

  public async findById(categoryId: string): Promise<Category | null> {
    const query = "SELECT * FROM category WHERE id = $1 and active = true"
    const result = await db.oneOrNone(query, [categoryId])
    if (!result) {
      return null
    }
    const category: Category = {
      id: result.id,
      name: result.name,
      description: result.description,
    }
    return category
  }

  public async listAll(page: number = 1): Promise<Category[] | null> {
    try {
      const categories: Category[] = await db.any(
        `SELECT * FROM category WHERE active = true LIMIT 10 OFFSET(${page - 1} * 10)`,
      )
      return categories
    } catch (error) {
      console.error("Error fetching categories:", error)
      return null
    }
  }

  async countCategories(): Promise<number> {
    const qtde = await db.oneOrNone(`select count(*) total from category where active = true`)
    if (!qtde) return 0

    return qtde.total
  }

  async delete(categoryId: string): Promise<void> {
    try {
      const query = `update category set actove = false WHERE id = $1)`
      await db.any(query, [categoryId])
    } catch (error) {
      throw new Error("Could not delete category")
    }
  }
}

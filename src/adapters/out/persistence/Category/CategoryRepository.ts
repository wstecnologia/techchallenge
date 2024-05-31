import Category from '@/core/category/domain/entities/Category'
import ICategoryRepository from '@/core/category/ports/out/ICategoryRepository'
import db from '../DB/db'
import Id from '@/core/shared/Id'
import pgPromise from 'pg-promise'

export default class CategoryRepository implements ICategoryRepository {
  private pool: pgPromise.IDatabase<{}>

  constructor() {
    this.pool = db
  }

  public async save(category: Category): Promise<void> {
    try {
      await this.pool.query(
        `INSERT INTO Category (id, name, description)
         VALUES ($1, $2, $3)`,
        [Id.gerar(), category.name, category.description],
      )
    } catch (error) {
      console.error('Error saving category:', error)
      throw new Error('Could not save category')
    }
  }

  public async findById(categoryId: string): Promise<Category | null> {
    try {
      const query = 'SELECT * FROM category WHERE id = $1'
      const result = await this.pool.oneOrNone(query, [categoryId])
      if (!result) {
        return null
      }
      const category: Category = {
        id: result.id,
        name: result.name,
        description: result.description,
      }
      return category
    } catch (error) {
      console.error('Error finding category by ID:', error)
      throw new Error('Could not find category by ID')
    }
  }

  public async listAll(): Promise<Category[]> {
    try {
      const categories: Category[] = await this.pool.any('SELECT * FROM category')
      return categories
    } catch (error) {
      console.error('Error listing all categories:', error)
      throw new Error('Could not list categories')
    }
  }
}

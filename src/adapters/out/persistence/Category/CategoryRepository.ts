import Category from '@/core/category/domain/entities/Category'
import ICategoryRepository from '@/core/category/ports/out/ICategoryRepository'
import db from '../DB/db'
import Id from '@/core/shared/Id'

//export default class CategoryRepository implements ICategoryRepository {
export default class CategoryRepository {
  async save(category: Category): Promise<void> {
    await db.query(
      `insert into Category (id, nome, descricao)
      values ($1, $2, $3)`,
      [Id.gerar(), category.name, category.description],
    )
  }
  private category: Category[] = []

  async findById(categoryId: string): Promise<Category | null> {
    return this.category.find(category => category.id === categoryId) || null
  }
}

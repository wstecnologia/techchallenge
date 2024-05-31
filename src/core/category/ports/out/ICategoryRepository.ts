import Category from '../../domain/entities/Category'

export default interface ICategorysitory {
  registerCategory(category: Category): Promise<void>
  findById(categoryId: string): Promise<Category | null>
  listAll(): Promise<Category[] | null>
}

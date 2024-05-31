import Category from '../../domain/entities/Category'

export default interface ICategorysitory {
  findById(categoryId: string): Promise<Category | null>
  save(category: Category): Promise<void>
  listAll(): Promise<Category[] | null>
}

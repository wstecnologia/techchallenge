import Category from '../../domain/entities/Category'

export default interface ICategoryUseCase {
  findById(email: string): Promise<Category | null>
  findById(categoryId: string): Promise<Category | null>
  save(category: Category): Promise<void>
  listAll(): Promise<Category[] | null>
}

import Category from '../../domain/entities/Category'
export default interface ICategoryUseCase {
  findById(categoryId: string): Promise<Category | null>
  registerCategory(category: Category): Promise<void>
  listAll(): Promise<Category[] | null>
}

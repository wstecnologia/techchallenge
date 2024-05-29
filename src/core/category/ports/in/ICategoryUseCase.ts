import Category from '../../domain/entities/Category'

export default interface ICategoryUseCase {
  findById(email: string): Promise<Category | null>
  save(customer: Category): Promise<void>
}

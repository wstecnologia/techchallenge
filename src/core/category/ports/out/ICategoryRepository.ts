import Category from '../../domain/entities/Category'

export default interface ICategorysitoryUseCase {
  findById(categoryId: string): Promise<Category | { message: string }>
  save(category: Category): Promise<{ message: string }>
}

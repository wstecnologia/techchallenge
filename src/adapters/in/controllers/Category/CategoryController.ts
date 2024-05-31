import ICategorysitoryUseCase from '@/core/category/ports/out/ICategoryRepository'
import Category from '@/core/category/domain/entities/Category'
import CategoryUseCase from '@/core/category/domain/usecases/Category.usecase'
import CategoryRepository from '@/adapters/out/persistence/Category/CategoryRepository'
import ICategoryRepository from '@/core/category/ports/out/ICategoryRepository'

const categoryRepository = new CategoryRepository()
const categoryUseCase = new CategoryUseCase(categoryRepository)

export default class CategoryController implements ICategoryRepository {
  async registerCategory(category: Category): Promise<void> {
    await categoryUseCase.registerCategory(category)
  }
  async findById(categoryId: string): Promise<Category> {
    try {
      const category: Category = await categoryUseCase.findById(categoryId)
      if (category === null) return
      return category
    } catch (error) {
      throw new Error('Could not save category')
    }
  }

  public async listAll(page: number): Promise<Category[]> {
    try {
      const categories: Category[] = await categoryUseCase.listAll(page)
      return categories
    } catch (error) {
      console.error('Error listing all categories:', error)
      throw new Error('Could not list categories')
    }
  }
}

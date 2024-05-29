import ICategorysitoryUseCase from '@/core/category/ports/out/ICategoryRepository'
import Category from '@/core/category/domain/entities/Category'
import CategoryUseCase from '@/core/category/domain/usecases/Category.usecase'
import CategoryRepository from '@/adapters/out/persistence/Category/CategoryRepository'
import ICategoryRepository from '@/core/category/ports/out/ICategoryRepository'

const categoryRepository = new CategoryRepository()
const categoryUseCase = new CategoryUseCase(categoryRepository)

export default class CategoryController implements ICategoryRepository {
  async save(category: Category): Promise<{ message: string }> {
    try {
      await categoryUseCase.save(category)
      return { message: 'Category created successfully' }
    } catch (error) {
      return { message: 'Error creating category' }
    }
  }

  async findById(categoryId: string): Promise<Category | { message: string }> {
    try {
      const category = await categoryUseCase.findById(categoryId)
      if (category) {
        return new Category(category.id, category.name, category.description)
      } else {
        return { message: 'Category not found' }
      }
    } catch (error) {
      return { message: 'Error fetching category' }
    }
  }
}

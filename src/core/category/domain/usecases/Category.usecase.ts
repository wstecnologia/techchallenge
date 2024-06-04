import ICategoryUseCase from '@/core/category/ports/in/ICategoryUseCase'
import Category from '@/core/category/domain/entities/Category'
import PageResponse from '@/core/shared/pagination/PageResponse'
import Pagination from '@/core/shared/pagination/Pagination'

export default class CategoryUseCase {
  constructor(private categoryRepository: ICategoryUseCase) {}

  async findById(id: string): Promise<Category> {
    return await this.categoryRepository.findById(id)
  }

  async registerCategory(category: Category): Promise<void> {
    await this.categoryRepository.registerCategory(category)
  }

  async listAll(page: number = 0): Promise<Category[]> {
    return await this.categoryRepository.listAll(page)
  }

  async listAllCategories(page: number): Promise<PageResponse<Category>> {
    const categories = await this.listAll(page)
    const totalCategories: number = await this.categoryRepository.countCategories()
    const totalPages = Math.ceil(totalCategories / 10)

    const pagination: Pagination = {
      currentPage: page,
      totalPage: totalPages,
      totalItems: totalCategories,
      itemsPerPage: 10,
    }

    return {
      items: categories,
      pagination,
    }
  }
}

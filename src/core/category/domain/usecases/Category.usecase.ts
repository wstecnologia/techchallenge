import ICategoryUseCase from '../../ports/in/ICategoryUseCase'

import Category from '../entities/Category'

export default class CategoryUseCase {
  constructor(private categoryRepository: ICategoryUseCase) {}
  async findById(id: any) {
    return this.categoryRepository.findById(id)
  }
  async registerCategory(category: Category) {
    this.categoryRepository.registerCategory(category)
  }

  async listAll(page: number = 0) {
    return this.categoryRepository.listAll(page)
  }
}

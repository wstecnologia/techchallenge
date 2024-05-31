import ICategorysitoryUseCase from '../../ports/out/ICategoryRepository'
import Category from '../entities/Category'

export default class CategoryUseCase {
  constructor(private categoryRepository: ICategorysitoryUseCase) {}
  async findById(id: any) {
    return this.categoryRepository.findById(id)
  }
  async save(category: Category) {
    this.categoryRepository.save(category)
  }

  async listAll() {
    return this.categoryRepository.listAll()
  }
}

import db from '@/adapters/out/persistence/DB/db'
import ICategoryUseCase from '../../ports/in/ICategoryUseCase'
import Category from '../entities/Category'

export default class CategoryUseCase {
  constructor(private categoryController: ICategoryUseCase) {}
  async findById(id: any) {
    return this.categoryController.findById(id)
  }

  async save(category: Category) {
    this.categoryController.save(category)
  }
}

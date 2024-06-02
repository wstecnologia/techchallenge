import CategoryController from '@/adapters/in/controllers/Category/CategoryController'
import ExpressAdapter from '../ExpressAdapter'
import { Router } from 'express'

class CategoryRoutes {
  private router: Router
  private categoryController: CategoryController

  constructor(router: Router) {
    this.router = router
    this.categoryController = new CategoryController()

    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post('/categories', ExpressAdapter.adaptRoute(this.registerCategory.bind(this)))
    this.router.get('/categories/id', ExpressAdapter.adaptRoute(this.findById.bind(this)))
    this.router.get('/categories', ExpressAdapter.adaptRoute(this.listAll.bind(this)))
    this.router.delete('/categories', ExpressAdapter.adaptRoute(this.deleteCategory.bind(this)))
  }

  private async registerCategory({ body }: { body: any }) {
    return this.categoryController.registerCategory(body)
  }

  private async findById({ query }: { query: any }) {
    const { id } = query
    return this.categoryController.findById(id.toString())
  }

  private async listAll({ query }: { query: any }) {
    const { page } = query
    return this.categoryController.listAll(Number(page))
  }

  private async deleteCategory() {
    return { message: 'Categoria excluída com sucesso' }
  }
}

export default CategoryRoutes

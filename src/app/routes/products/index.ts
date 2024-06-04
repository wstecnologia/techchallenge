import ProductController from '@/adapters/in/controllers/Product/ProductController'
import ExpressAdapter from '../ExpressAdapter'
import { Router } from 'express'
import ProductUseCase from '@/core/product/domain/usecases/Product.usecase'

class ProductRoutes {
  private router: Router
  private productController: ProductController

  constructor(router: Router) {
    this.router = router
    this.productController = new ProductController()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post('/products', ExpressAdapter.adaptRoute(this.registerProduct.bind(this)))
    this.router.get('/products/id', ExpressAdapter.adaptRoute(this.findById.bind(this)))
    this.router.get('/products/category', ExpressAdapter.adaptRoute(this.findByCategory.bind(this)))
    this.router.get('/products', ExpressAdapter.adaptRoute(this.listAll.bind(this)))
  }

  private async registerProduct({ body }: { body: any }) {
    return this.productController.registerProduct(body)
  }

  private async findById({ query }: { query: any }) {
    const { id } = query
    return this.productController.findById(id.toString())
  }

  private async findByCategory({ query }: { query: any }) {
    const { category, page } = query
    return this.productController.findByCategory(category.toString(), Number(page))
  }

  private async listAll({ query }: { query: any }) {
    const { page } = query
    return this.productController.listAll(Number(page))
  }
}

export default ProductRoutes

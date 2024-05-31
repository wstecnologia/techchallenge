import ProductRepository from '@/adapters/out/persistence/Product/ProductRepository'
import Product from '@/core/product/domain/entities/Product'
import ProductUseCase from '@/core/product/domain/usecases/Product.usecase'

const productRepository = new ProductRepository()
const productUseCase = new ProductUseCase(productRepository)

export default class ProductController {
  async registerProduct(product: Product): Promise<void> {
    await productUseCase.registerProduct(product)
  }

  async findById(productId: string): Promise<Product> {
    return await productUseCase.findById(productId)
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return await productUseCase.findByCategory(categoryId)
  }

  async listAll(): Promise<Product[]> {
    return await productUseCase.listAll()
  }
}

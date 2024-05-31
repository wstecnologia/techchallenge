import ProductRepository from '@/adapters/out/persistence/Product/ProductRepository'
import Product from '@/core/product/domain/entities/Product'
import ProductUseCase from '@/core/product/domain/usecases/Product.usecase'

const productRepository = new ProductRepository()
const productUseCase = new ProductUseCase(productRepository)

export default class ProductController {
  async registerProduct(product: Product): Promise<void> {
    await productUseCase.registerProduct(product)
  }

  async findById(productId: string): Promise<Product[]> {
    const product = await productUseCase.findById(productId)
    return [product]
  }

  async findByCategory(categoryId: string, page: number): Promise<Product[]> {
    return await productUseCase.findByCategory(categoryId, page)
  }

  async listAll(page: number): Promise<Product[]> {
    return await productUseCase.listAll(page)
  }
}

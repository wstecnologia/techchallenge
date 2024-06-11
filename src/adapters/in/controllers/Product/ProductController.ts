import ProductRepository from "@/adapters/out/persistence/Product/ProductRepository"
import Product from "@/core/product/domain/entities/Product"
import ProductUseCase from "@/core/product/domain/usecases/Product.usecase"
import PageResponse from "@/core/shared/pagination/PageResponse"

export default class ProductController {
  private productRepository: ProductRepository
  private productUseCase: ProductUseCase

  constructor() {
    this.productRepository = new ProductRepository()
    this.productUseCase = new ProductUseCase(this.productRepository)
  }

  async registerProduct(product: Product): Promise<void> {
    await this.productUseCase.registerProduct(product)
  }

  async findById(productId: string): Promise<Product[]> {
    const product = await this.productUseCase.findById(productId)
    return [product]
  }

  async findByCategory(categoryId: string, page: number): Promise<PageResponse<Product>> {
    return await this.productUseCase.findByCategory(categoryId, page)
  }

  async listAll(page: number): Promise<Product[]> {
    const products = await this.productUseCase.listAll(page)
    return products
  }

  async listAllProducts(page: number): Promise<PageResponse<Product>> {
    const products = await this.productUseCase.listAllProducts(page)
    return products
  }

  async delete(productId: string): Promise<void> {
    await this.productUseCase.delete(productId)
  }

  async updateProduct(product: Product): Promise<void> {
    await this.productUseCase.updateProduct(product)
  }
}

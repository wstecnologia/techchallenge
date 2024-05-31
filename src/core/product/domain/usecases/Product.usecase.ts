import ErrosMessage from '@/core/shared/error/ErrosMessage'
import IProductUseCase from '../../ports/in/IProductUseCase'
import IProductRepository from '../../ports/out/IProductRepository'
import Product from '../entities/Product'
import Id from '@/adapters/out/persistence/generateID/Id'
import AppErros from '@/core/shared/error/AppErros'
export default class ProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async registerProduct(product: Product): Promise<void> {
    const existingProduct = await this.productRepository.findById(product.id)
    if (existingProduct) {
      throw new Error(ErrosMessage.PRODUTO_JA_EXISTE)
    }

    const newProduct = new Product(
      Id.gerar(),
      product.name,
      product.description,
      product.price,
      product.categoryId,
      product.image,
    )

    await this.productRepository.registerProduct(newProduct)
  }

  async findById(productId: string): Promise<Product> {
    const product = await this.productRepository.findById(productId)
    if (!product) throw new AppErros(400, ErrosMessage.PRODUTO_NAO_LOCALIZADO)
    return product
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return await this.productRepository.findByCategory(categoryId)
  }

  async listAll(): Promise<Product[]> {
    return await this.productRepository.listAll()
  }
}

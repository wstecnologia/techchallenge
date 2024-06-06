import ErrosMessage from '@/core/shared/error/ErrosMessage'
import IProductRepository from '../../ports/out/IProductRepository'
import Product from '../entities/Product'
import Id from '@/adapters/out/persistence/generateID/Id'
import AppErros from '@/core/shared/error/AppErros'
import PageResponse from '@/core/shared/pagination/PageResponse'
import Pagination from '@/core/shared/pagination/Pagination'
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
    if (!product) throw new AppErros(ErrosMessage.PRODUTO_NAO_LOCALIZADO, 400)
    return product
  }

  async findByCategory(categoryId: string, page: number): Promise<Product[]> {
    return await this.productRepository.findByCategory(categoryId, page)
  }

  async listAll(page: number): Promise<Product[]> {
    return await this.productRepository.listAll(page)
  }

  async listAllProducts(page: number): Promise<PageResponse<Product>> {
    const products = await this.productRepository.listAll(page)
    const totalProducts: number = await this.productRepository.countProducts()
    const totalPages = Math.ceil(totalProducts / 10)

    const pagination: Pagination = {
      currentPage: page,
      totalPage: totalPages,
      totalItems: Number(totalProducts),
      itemsPerPage: 10,
    }
    return {
      items: products,
      pagination,
    }
  }

  async delete(productId: string): Promise<void> {
    return this.productRepository.delete(productId)
  }
}

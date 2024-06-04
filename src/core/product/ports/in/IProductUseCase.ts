import Product from '../../domain/entities/Product'

export default interface IProductUseCase {
  registerProduct(product: Product): Promise<void>
  findById(productId: string): Promise<Product | null>
  findByCategory(categoryid: string, page: number): Promise<Product[] | null>
  listAllProducts(page: number): Promise<Product[]>
}

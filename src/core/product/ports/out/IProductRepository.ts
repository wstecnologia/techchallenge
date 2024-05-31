import Product from '../../domain/entities/Product'

export default interface IProductRepository {
  registerProduct(product: Product): Promise<void>
  findById(productId: string): Promise<Product | null>
  findByCategory(productId: string): Promise<Product[] | null>
  listAll(): Promise<Product[]>
}

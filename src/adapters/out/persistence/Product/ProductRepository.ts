import IProductRepository from '@/core/product/ports/out/IProductRepository'
import db from '../DB/db'
import Product from '@/core/product/domain/entities/Product'
import Id from '../generateID/Id'
import pgPromise from 'pg-promise'

export default class ProductRepository implements IProductRepository {
  private pool: pgPromise.IDatabase<{}>

  constructor() {
    this.pool = db
  }

  async registerProduct(product: Product): Promise<void> {
    const productId = Id.gerar()
    console.log('Registrando produto com ID:', productId) // Log para depuração
    console.log('Dados do produto:', product) // Log para depuração
    try {
      await this.pool.query(
        `INSERT INTO product (id, name, description, price, categoryid, image)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          productId,
          product.name,
          product.description,
          product.price,
          product.categoryId,
          product.image,
        ],
      )
      console.log('Produto registrado com sucesso') // Log para depuração
    } catch (err) {
      console.error('Erro ao cadastrar produto:', err) // Log para depuração
      throw new Error(`Erro ao cadastrar produto: ${err}`)
    }
  }

  async findById(productId: string): Promise<Product> {
    const query = 'SELECT * FROM product WHERE id = $1'
    const result = await this.pool.oneOrNone(query, [productId])
    if (!result) {
      return null
    }
    return result
  }

  async findByCategory(categoryid: string): Promise<Product[]> {
    const query = 'SELECT * FROM product WHERE categoryid = $1'
    const result = await this.pool.any(query, [categoryid])
    return result
  }

  async listAll(): Promise<Product[]> {
    try {
      const products: Product[] = await this.pool.any('SELECT * FROM product')
      return products
    } catch (error) {
      throw new Error('Could not list products')
    }
  }
}

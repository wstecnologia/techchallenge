import IProductRepository from '@/core/product/ports/out/IProductRepository'
import db from '../DB/db'
import Product from '@/core/product/domain/entities/Product'
import Id from '../generateID/Id'

export default class ProductRepository implements IProductRepository {
  async registerProduct(product: Product): Promise<void> {
    const productId = Id.gerar()
    try {
      await db.query(
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
    } catch (err) {
      throw new Error(`Erro ao cadastrar produto: ${err}`)
    }
  }

  async countProducts(): Promise<number> {
    const qtde = await db.oneOrNone(`select count(*) total from product where active = true`)
    if (!qtde) return 0

    return qtde.total
  }

  async findById(productId: string): Promise<Product> {
    const query = 'SELECT * FROM product WHERE id = $1 and active = true'
    const result = await db.oneOrNone(query, [productId])
    if (!result) {
      return null
    }
    return result
  }

  async findByCategory(categoryid: string, page: number = 0): Promise<Product[]> {
    const query = `SELECT * FROM product WHERE categoryid = $1 and active = true LIMIT 10 OFFSET(${page} * 10)`
    const result = await db.any(query, [categoryid])
    return result
  }

  async listAll(page: number = 0): Promise<Product[]> {
    try {
      const products: Product[] = await db.any(`SELECT * FROM product where active = true`)
      return products
    } catch (error) {
      throw new Error('Could not list products')
    }
  }

  async delete(productId: string): Promise<void> {
    try {
      const query = `update product set actove = false WHERE id = $1 and active = true)`
      await db.any(query, [productId])
    } catch (error) {
      throw new Error('Could not delete products')
    }
  }
}

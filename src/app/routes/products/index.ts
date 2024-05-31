import ProductController from '@/adapters/in/controllers/Product/ProductController'
import { Router, Request, Response } from 'express'

const productController = new ProductController()

const router = Router()
router.get('/products', async (request: Request, response: Response) => {
  try {
    const lstProducts = await productController.listAll()
    response.status(200).json(lstProducts)
  } catch (error) {
    console.error('Erro ao listar produtos:', error) // Log para depuração
    response.status(500).json({ message: 'Erro ao listar produtos', error: error.message })
  }
})

export default router

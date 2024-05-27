import InMemoryOrderRepository from '@/adapters/out/persistence/Order/InMemoryOrderRepository'
import OrderService from '@/core/order/domain/usecases/Order.usecase'
import { Request, Response } from 'express'

const orderRepository = new InMemoryOrderRepository()
const orderService = new OrderService(orderRepository)

export default class OrderController {
  static async addOrder(req: Request, res: Response) {
    const { customerId, items } = req.body
    try {
      const order = await orderService.addOrder(customerId, items)
      res.status(201).json(order)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }

  static async updateOrderStatus(req: Request, res: Response) {
    const { orderId, status } = req.body
    try {
      await orderService.updateOrderStatus(orderId, status)
      res.status(200).json({ message: 'Order status updated' })
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}

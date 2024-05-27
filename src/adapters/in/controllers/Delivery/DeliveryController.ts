import InMemoryDeliveryRepository from '@/adapters/out/persistence/Delivery/InMemoryDeliveryRepository'
import DeliveryService from '@/core/delivery/domain/usecases/Delivery.usecase'
import { Request, Response } from 'express'

const deliveryRepository = new InMemoryDeliveryRepository()
const deliveryService = new DeliveryService(deliveryRepository)

export default class DeliveryController {
  static async startDelivery(req: Request, res: Response) {
    const { orderId } = req.body
    try {
      const delivery = await deliveryService.startDelivery(orderId)
      res.status(201).json(delivery)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }

  static async completeDelivery(req: Request, res: Response) {
    const { deliveryId } = req.body
    try {
      await deliveryService.completeDelivery(deliveryId)
      res.status(200).json({ message: 'Delivery completed' })
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}

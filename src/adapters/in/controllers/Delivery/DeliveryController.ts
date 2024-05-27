import InMemoryDeliveryRepository from '@/adapters/out/persistence/Delivery/InMemoryDeliveryRepository'
import DeliveryUseCase from '@/core/delivery/domain/usecases/Delivery.usecase'
import { Request, Response } from 'express'

const deliveryRepository = new InMemoryDeliveryRepository()
const deliveryUseCase = new DeliveryUseCase(deliveryRepository)

export default class DeliveryController {
  static async startDelivery(req: Request, res: Response) {
    const { orderId } = req.body
    try {
      const delivery = await deliveryUseCase.startDelivery(orderId)
      res.status(201).json(delivery)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }

  static async completeDelivery(req: Request, res: Response) {
    const { deliveryId } = req.body
    try {
      await deliveryUseCase.completeDelivery(deliveryId)
      res.status(200).json({ message: 'Delivery completed' })
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}

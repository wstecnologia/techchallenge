import Delivery from '../entities/Delivery'
import DeliveryRepository from '../../ports/DeliveryRepository'

export default class DeliveryService {
  constructor(private deliveryRepository: DeliveryRepository) {}

  async startDelivery(orderId: string): Promise<Delivery> {
    const delivery = new Delivery(Date.now().toString(), orderId, 'In Progress')
    await this.deliveryRepository.save(delivery)
    return delivery
  }

  async completeDelivery(deliveryId: string): Promise<void> {
    const delivery = await this.deliveryRepository.findById(deliveryId)
    if (!delivery) {
      throw new Error('Delivery not found')
    }
    delivery.deliveryStatus = 'Completed'
    await this.deliveryRepository.save(delivery)
  }
}

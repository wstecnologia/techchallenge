import Delivery from '@/core/delivery/domain/entities/Delivery'
import DeliveryRepository from '@/core/delivery/ports/DeliveryRepository'

export default class InMemoryDeliveryRepository implements DeliveryRepository {
  private deliveries: Delivery[] = []

  async findById(deliveryId: string): Promise<Delivery | null> {
    return this.deliveries.find(delivery => delivery.id === deliveryId) || null
  }

  async save(delivery: Delivery): Promise<void> {
    const existingDeliveryIndex = this.deliveries.findIndex(d => d.id === delivery.id)
    if (existingDeliveryIndex !== -1) {
      this.deliveries[existingDeliveryIndex] = delivery
    } else {
      this.deliveries.push(delivery)
    }
  }
}

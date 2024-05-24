import Delivery from '../domain/entities/Delivery'

export default interface DeliveryRepository {
  findById(deliveryId: string): Promise<Delivery | null>
  save(delivery: Delivery): Promise<void>
}

import Delivery from '../../domain/entities/Delivery'

export default interface DeliveryUseCase {
  startDelivery(orderId: string): Promise<Delivery>
  completeDelivery(deliveryId: string): Promise<void>
}

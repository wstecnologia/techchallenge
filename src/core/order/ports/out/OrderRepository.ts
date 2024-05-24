import Order from '../../domain/entities/Order'

export default interface OrderRepository {
  findById(orderId: string): Promise<Order | null>
  save(order: Order): Promise<void>
}

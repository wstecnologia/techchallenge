import OrderRepository from '../../ports/out/OrderRepository'
import Order from '../entities/Order'

export default class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async addOrder(customerId: string, items: string[]): Promise<Order> {
    const order = new Order(Date.now().toString(), customerId, items, 'Pending')
    await this.orderRepository.save(order)
    return order
  }

  async updateOrderStatus(orderId: string, status: string): Promise<void> {
    const order = await this.orderRepository.findById(orderId)
    if (!order) {
      throw new Error('Order not found')
    }
    order.status = status
    await this.orderRepository.save(order)
  }
}

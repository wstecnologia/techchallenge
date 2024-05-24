import Order from '@/core/order/domain/entities/Order'
import OrderRepository from '@/core/order/ports/out/OrderRepository'

export default class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = []

  async findById(orderId: string): Promise<Order | null> {
    return this.orders.find(order => order.id === orderId) || null
  }

  async save(order: Order): Promise<void> {
    const existingOrderIndex = this.orders.findIndex(o => o.id === order.id)
    if (existingOrderIndex !== -1) {
      this.orders[existingOrderIndex] = order
    } else {
      this.orders.push(order)
    }
  }
}

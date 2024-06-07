import OrderRepository from '@/adapters/out/persistence/Order/OrderRepository'
import Order from '@/core/order/domain/entities/Order'
import OrderUseCase from '@/core/order/domain/usecases/Order.usecase'

const orderRepository = new OrderRepository()
const orderUseCase = new OrderUseCase(orderRepository)

export default class OrderController {

  static async addOrder(order:Order) {
    return await orderUseCase.addOrder(order)      
  }

  static async listAllOrders(page:number) {
    return await orderUseCase.listAllOrders(page)    
  }

  static async updateOrderStatus(orderId: number, status: string): Promise<object | null> {
    return await orderUseCase.updateOrderStatus(orderId, status)
  }
}

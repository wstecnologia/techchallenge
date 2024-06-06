import Order from '../entities/Order'
import OrderRepository from '../../ports/out/OrderRepository'
import Id from '@/core/shared/Id'
import AppErros from '@/core/shared/error/AppErros'

export default class OrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async addOrder(order: Order): Promise<number | null> {
    if(!order.items.length){
      throw new AppErros("Necessario incluir ao menos um produto no pedido, verifique")
    }
    
    const orderNumber = await this.orderRepository.numberOrder()
    order.id = Id.gerar()
    order.number = orderNumber
    order.dataCreated = new Date().toLocaleString()
    order.situationId = "9e07b6f1-c470-4318-8c1a-2441771b600e"

    order.items.forEach((orderItem, index)=>{
      orderItem.id = Id.gerar()
      orderItem.dataCreated = new Date().toLocaleString()
    })
     
    return await this.orderRepository.createdOrder(order)
  }

  async updateOrderStatus(orderId: number, status: string): Promise<object | null> {
    return await this.orderRepository.updateOrderStatus(orderId, status)
  }

  async listAllOrders():Promise<Order[] | null>{
    return await this.orderRepository.listAllOrders()
  }

}

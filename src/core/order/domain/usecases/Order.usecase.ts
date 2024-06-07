import Order from '../entities/Order'
import OrderRepository from '../../ports/out/OrderRepository'
import Pagination from '@/core/shared/pagination/Pagination'
import PageResponse from '@/core/shared/pagination/PageResponse'
import Payment from '@/core/payment/domain/entities/Payment'

export default class OrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async addOrder(order: Order): Promise<object | null> {

    const orderNumber = await this.orderRepository.numberOrder()
    
    const ordernew = Order.factory({
      numberOrder:orderNumber,
      items:order.items,
      situationId:"9e07b6f1-c470-4318-8c1a-2441771b600e",
      observation:order.observation,
      customerId: order.customerId,
      payment: order.payment
    })
     
    await this.orderRepository.createdOrder(ordernew)
    //await this.paymentRepository.createPayment(ordernew.payment)

    return {
      order:orderNumber,
      message:"Order placed successfully",      
    }
  }

  async updateOrderStatus(orderId: number, status: string): Promise<object | null> {
    return await this.orderRepository.updateOrderStatus(orderId, status)
  }

  async listAllOrders(page: number):Promise<PageResponse<Order>>{

    const orders = await this.orderRepository.listAllOrders(page)
    const totalOrders:number = await this.orderRepository.countOrders()
    const totalPages = Math.ceil(totalOrders / 10);

    const pagination: Pagination = {
      currentPage:page,
      totalPage:totalPages,
      totalItems:Number(totalOrders),      
      itemsPerPage:10
    }
    return {
      pagination,
      items:orders,
    }
    //return await this.orderRepository.listAllOrders()
  }

}

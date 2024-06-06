import Order from '../../domain/entities/Order'
import OrderItems from '../../domain/entities/OrderItems'

export default interface IOrderRepository { 
  createdOrder(order: Order): Promise<number | null>
  numberOrder():Promise<number | null>
  listAllOrders():Promise<Order[] | null>
  updateOrderStatus(numberOrder: number, status: string):Promise<object | null>
}

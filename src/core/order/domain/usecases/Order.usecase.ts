import Order from "../entities/Order"
import OrderRepository from "../../ports/out/OrderRepository"
import Pagination from "@/core/shared/pagination/Pagination"
import PageResponse from "@/core/shared/pagination/PageResponse"
import ErrosMessage from "@/core/shared/error/ErrosMessage"
import AppErros from "@/core/shared/error/AppErros"

export default class OrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async addOrder(order: Order): Promise<object | null> {
    const orderNumber = await this.orderRepository.numberOrder()

    const ordernew = Order.factory({
      numberOrder: orderNumber,
      items: order.items,
      situationId: "9e07b6f1-c470-4318-8c1a-2441771b600e",
      observation: order.observation,
      customerId: order.customerId,
      payment: order.payment,
    })

    await this.orderRepository.createdOrder(ordernew)

    return {
      order: orderNumber,
      message: "Order placed successfully",
    }
  }

  async finalizeOrder(orderId: number): Promise<object | null> {
    const findOrder = await this.orderRepository.findOrderByNumber(orderId)

    if (!findOrder) {
      throw new AppErros("ORDER NOT LOCATE", 404)
    }

    await this.orderRepository.updateOrderStatus(orderId, "3f4798e6-1f03-411e-b99b-73833c104255")
    return {
      message: "Order finalized of success!",
    }
  }

  async listAllOrders(page: number): Promise<PageResponse<Order>> {
    if (page <= 0) {
      throw new AppErros(ErrosMessage.ENTER_PAGE_VALID, 404)
    }
    const orders = await this.orderRepository.listAllOrders(page)
    const totalOrders: number = await this.orderRepository.countOrders()
    const totalPages = Math.ceil(totalOrders / 10)

    if (orders.length === 0) {
      throw new AppErros(ErrosMessage.LIST_NOT_LOCALIZED, 404)
    }

    const pagination: Pagination = {
      currentPage: page,
      totalPage: totalPages,
      totalItems: Number(totalOrders),
      itemsPerPage: 10,
    }
    return {
      pagination,
      items: orders,
    }
  }
}

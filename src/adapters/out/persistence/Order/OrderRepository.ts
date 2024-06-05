import Order from '@/core/order/domain/entities/Order'
import IOrderRepository from '@/core/order/ports/out/OrderRepository'
import db from '../DB/db'


export default class OrderRepository implements IOrderRepository {

  async updateOrderStatus(numberOrder: number, status: string): Promise<object | null> {
    await db.query(
      `UPDATE orders SET situationId = $1 WHERE number = $2`,
      [
        status, 
        numberOrder
      ],
    )
    return { message: "ALter Success" }
  }

  async listAllOrders(): Promise<Order[] | null> {
    const orders:Order [] = await db.any(
      `SELECT
        o.number,
        o.datacreated,
        o.observation,
        s.description situation,
        c.name customerName
      FROM orders o
      inner join situactions s on s.id = o.situationid
      inner join customers c on c.id = o.customerid`
    )
    return orders
  }

  async createdOrder(order: Order): Promise<number | null> {

      await db.query(
        `insert into orders (id, number, datacreated, customerid, situationid, observation)
        values ($1, $2, $3, $4, $5, $6)`,
        [
          order.id, 
          order.number, 
          order.dataCreated, 
          order.customerId, 
          order.situationId,
          order.observation
        ],
      )

      for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        await db.query(`insert into ordersitems (id, numberorder, productid, productdescription, productprice, active, datacreated )
          values ($1, $2, $3, $4, $5, $6,$7)`,
        [
          item.id,
          order.number,
          item.productId,
          item.productDescription,
          item.productPrice,
          true,
          item.dataCreated
        ])
      }

      
      return order.number
    
  }

  async numberOrder(): Promise<number | null>{    
    const retorno =  await db.oneOrNone(`select max(number) + 1 number from orders`)
    return retorno.number
  }
}

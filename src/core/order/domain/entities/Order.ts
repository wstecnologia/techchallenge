import AppErros from "@/core/shared/error/AppErros"
import OrderItems from "./OrderItems"
import { IdGenerator } from "@/core/shared/GeneratorID/IdGenerator"
import { Payment } from "@/core/payment/domain/entities/Payment"

interface IOrder {
  numberOrder: number
  customerId: string
  items: OrderItems[]
  payment: Payment
  situationId: string
  observation: string
  idGenerator: IdGenerator
}

export default class Order {
  private _id: string
  private _dataCreated: string
  private _customerId: string
  private _items: OrderItems[] = []
  private _payments: Payment

  constructor(
    private _number: number,
    customerId: string,
    items: OrderItems[],
    payment: Payment,
    private _situationId: string,
    private _observation: string,
    idGenerator: IdGenerator,
  ) {
    this._id = idGenerator.gerar()
    this._payments = this.addPayment(payment)
    this._dataCreated = new Date().toLocaleString()
    this._customerId = this.validateCustomer(customerId)
    this.setItems(items)
  }

  static factory(order: IOrder) {
    return new Order(
      order.numberOrder,
      order.customerId,
      order.items,
      order.payment,
      order.situationId,
      order.observation,
      order.idGenerator,
    )
  }

  //getters
  get id(): string {
    return this._id
  }

  get payment(): Payment {
    return this._payments
  }

  get number(): number {
    return this._number
  }

  get dataCreated(): string {
    return this._dataCreated
  }

  get customerId(): string {
    return this._customerId
  }

  get situationId(): string {
    return this._situationId
  }

  get observation(): string {
    return this._observation
  }

  get items(): OrderItems[] {
    return this._items
  }

  //setters
  set payment(value: Payment) {
    this._payments = this.addPayment(value)
  }

  set number(value: number) {
    this._number = value
  }

  set customerId(value: string) {
    this._customerId = this.validateCustomer(value)
  }

  set situationId(value: string) {
    this._situationId = value
  }

  set observation(value: string) {
    this._observation = value
  }

  set items(values: OrderItems[]) {
    this.setItems(values)
  }

  private setItems(values: OrderItems[]) {
    if (!values.length) {
      throw new AppErros("Necessario incluir ao menos um produto no pedido, verifique")
    }

    this._items = []
    values.forEach(item => this.addItem(item))
  }

  private addPayment(payment: Payment) {
    return new Payment(this._id, payment.amount)
  }

  private addItem(orderItem: OrderItems) {
    this._items.push(
      new OrderItems(
        this._number,
        orderItem.quantity,
        orderItem.productId,
        orderItem.productDescription,
        orderItem.productPrice,
        true,
      ),
    )
  }

  private validateCustomer(value: string): string {
    if (value === "") {
      return "eefdd3d4-97af-4ae6-bdc7-2f8ec461b28c"
    } else {
      return value
    }
  }
}

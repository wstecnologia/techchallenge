import { IdGenerator } from "@/core/shared/GeneratorID/IdGenerator"
import AppErros from "@/core/shared/error/AppErros"

export default class OrderItems {
  private _id: string
  private _quantity: number
  private _dataCreated: string

  constructor(
    private _numberOrder: number,
    quantity: number,
    private _productId: string,
    private _productDescription: string,
    private _productPrice: number,
    private _active: boolean,
    idGenerator: IdGenerator,
  ) {
    this._id = idGenerator.gerar()
    this._quantity = this.validateQuantity(quantity)
    this._dataCreated = new Date().toLocaleString()
  }

  //getters
  get id(): string {
    return this._id
  }

  get numberOrder(): number {
    return this._numberOrder
  }

  get quantity(): number {
    return this._quantity
  }

  get productId(): string {
    return this._productId
  }

  get productDescription(): string {
    return this._productDescription
  }

  get productPrice(): number {
    return this._productPrice
  }

  get active(): boolean {
    return this._active
  }

  get dataCreated(): string {
    return this._dataCreated
  }

  //setters

  set numberOrder(value: number) {
    this._numberOrder = value
  }

  set quantity(value: number) {
    this._quantity = this.validateQuantity(value)
  }

  set productId(value: string) {
    this._productId = value
  }

  set productDescription(value: string) {
    this._productDescription = value
  }

  set productPrice(value: number) {
    this._productPrice = value
  }

  set active(value: boolean) {
    this._active = value
  }

  private validateQuantity(value: number): number {
    if (typeof value !== "number" || isNaN(value) || value <= 0) {
      throw new AppErros(`Item com quantidade zerada, verifique!`)
    }
    return value
  }
}

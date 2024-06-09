import Id from "@/core/shared/Id"

export enum PaymentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Failed = "Failed",
}

export class Payment {
  private _status: PaymentStatus
  private _id: string
  private _date: Date

  constructor(
    public orderId: string,
    public amount: number,
  ) {
    this._status = PaymentStatus.Completed
    this._id = Id.gerar()
    this._date = new Date()
  }

  get status(): PaymentStatus {
    return this._status
  }

  get id(): string {
    return this._id
  }

  get date(): Date {
    return this._date
  }

  set id(value: string) {
    this._id = value
  }

  set date(value: Date) {
    this._date = value
  }
}

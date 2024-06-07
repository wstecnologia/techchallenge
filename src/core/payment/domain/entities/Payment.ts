import Id from '@/core/shared/Id'
import { QRCode } from '../value-objects/QRCode'

export enum PaymentStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
}

export class Payment {
  private _status: PaymentStatus

  constructor(
    public readonly id: string,
    public readonly orderId: string,
    public readonly amount: number,
    public readonly qrCode: QRCode,
    public readonly date: Date,
  ) {
    this._status = PaymentStatus.Pending
    this.id = Id.gerar()
  }

  get status(): PaymentStatus {
    return this._status
  }
}

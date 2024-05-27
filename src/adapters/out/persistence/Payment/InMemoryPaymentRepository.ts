import Payment from '@/core/payment/domain/entities/Payment'
import PaymentRepository from '@/core/payment/ports/out/persistence/PaymentRepository'

export default class InMemoryPaymentRepository implements PaymentRepository {
  private payments: Payment[] = []

  async save(payment: Payment): Promise<void> {
    this.payments.push(payment)
  }
}

import Payment from '../entities/Payment'
import PaymentRepository from '../../ports/out/PaymentRepository'

export default class PaymentUseCase {
  constructor(private paymentRepository: PaymentRepository) {}

  async processPayment(customerId: string, amount: number): Promise<Payment> {
    const payment = new Payment(Date.now().toString(), customerId, amount, 'Processed')
    await this.paymentRepository.save(payment)
    return payment
  }
}

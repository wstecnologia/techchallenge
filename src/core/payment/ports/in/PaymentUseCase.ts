import Payment from '../../domain/entities/Payment'

export default interface PaymentUseCase {
  processPayment(customerId: string, amount: number): Promise<Payment>
}

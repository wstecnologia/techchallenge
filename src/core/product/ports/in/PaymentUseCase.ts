import Payment from '../../domain/entities/Product'

export default interface PaymentUseCase {
  processPayment(customerId: string, amount: number): Promise<Payment>
}

import Payment from '../../domain/entities/Product'

export default interface PaymentRepository {
  save(payment: Payment): Promise<void>
}

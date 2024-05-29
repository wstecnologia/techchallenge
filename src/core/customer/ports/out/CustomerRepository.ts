import Customer from '../../domain/entities/Customer'

export default interface ICustomerRepository {
  findByEmail(email: string): Promise<Customer | null>
  save(customer: Customer): Promise<void>
}
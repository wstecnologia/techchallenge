import Customer from '@/core/customer/domain/entities/Customer'
import CustomerRepository from '@/core/customer/ports/out/CustomerRepository'

export default class InMemoryCustomerRepository implements CustomerRepository {
  listAll(): Promise<Customer[]> {
    throw new Error('Method not implemented.')
  }
  findByCpf(cpf: string): Promise<Customer> {
    throw new Error('Method not implemented.')
  }
  private customers: Customer[] = []

  async findByEmail(email: string): Promise<Customer | null> {
    return this.customers.find(customer => customer.email === email) || null
  }

  async save(customer: Customer): Promise<void> {
    this.customers.push(customer)
  }
}

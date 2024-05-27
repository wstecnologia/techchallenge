import CustomerRepository from '../../ports/out/CustomerRepository'
import Customer from '../entities/Customer'

export default class CustomerUseCase {
  constructor(private customerRepository: CustomerRepository) {}

  async registerCustomer(name: string, email: string, cpf: string): Promise<Customer> {
    const existingCustomer = await this.customerRepository.findByEmail(email)
    if (existingCustomer) {
      throw new Error('Customer already registered')
    }
    const newCustomer = new Customer(Date.now().toString(), name, email, cpf)
    await this.customerRepository.save(newCustomer)
    return newCustomer
  }
}

import Id from '@/core/shared/Id'
import Customer from '../entities/Customer'
import ErrosMessage from '@/core/shared/ErrosMessage'
import ICustomerRepository from '../../ports/out/CustomerRepository'

export default class CustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async registerCustomer(newCustomers: Customer): Promise<Customer> {
    const existingCustomer = await this.customerRepository.findByEmail(newCustomers.email)
    if (existingCustomer) {
      throw new Error(ErrosMessage.USUARIO_JA_EXISTE)
    }

    const newCustomer = new Customer(
      Id.gerar(), 
      newCustomers.name, 
      newCustomers.email, 
      newCustomers.cpf
    )
 
    await this.customerRepository.save(newCustomer)
    return newCustomer
    
  }
}

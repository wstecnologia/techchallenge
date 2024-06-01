import Id from '@/core/shared/Id'
import Customer from '../entities/Customer'
import ErrosMessage from '@/core/shared/error/ErrosMessage'
import ICustomerRepository from '../../ports/out/CustomerRepository'
import Pagination from '@/core/shared/pagination/Pagination'
import PageResponse from '@/core/shared/pagination/PageResponse'
import AppErros from '@/core/shared/error/AppErros'

export default class CustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async registerCustomer(newCustomers: Customer): Promise<Customer> {
    const existingCustomer = await this.customerRepository.findByCpf(newCustomers.cpf)
    if (existingCustomer) {
      throw new AppErros(ErrosMessage.USUARIO_JA_EXISTE)
    }

    const newCustomer = new Customer(
      Id.gerar(),
      newCustomers.name,
      newCustomers.email,
      newCustomers.cpf,
    )

    await this.customerRepository.save(newCustomer)
    return newCustomer
  }

  async listAllCustomers(page:number): Promise<PageResponse<Customer>>{
    const customers = await this.customerRepository.listAll(page)  
    const totalCustomers:number = await this.customerRepository.countCustomers()
    const totalPages = Math.ceil(totalCustomers / 10);

    const pagination: Pagination = {
      currentPage:page,
      totalPage:totalPages,
      totalItems:Number(totalCustomers),
      itemsPerPage:10
    }
    return {
      items:customers,
      pagination,
    }
  }

  async getCustomerCpf(cpf: string): Promise<Customer | null> {
    const returnValidation =  await this.customerRepository.findByCpf(cpf)
    if(!returnValidation) throw new AppErros(ErrosMessage.USUARIO_NAO_LOCALIZADO,401)
          
    return returnValidation
  }
}

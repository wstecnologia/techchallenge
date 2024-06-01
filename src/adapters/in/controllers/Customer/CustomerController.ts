import CustomerUseCase from '@/core/customer/domain/usecase/Customer.usecase'
import Customer from '@/core/customer/domain/entities/Customer'
import AppErros from '@/core/shared/error/AppErros'


export default class CustomerController {
  constructor(
    private customerUseCase:CustomerUseCase
  ){}

  async register(customer: Customer) {
  
    return await this.customerUseCase.registerCustomer(customer)
    
  }

  async listAll(page:number = 0) { 
    return await this.customerUseCase.listAllCustomers(page)     
  }

  async getCustomerCpf(cpf:string){
    if(cpf.length !== 11){
      throw new AppErros("O número de cpf deve conter 11 digitos")
    }
    
    if(!cpf.toString().trim()){
      throw new AppErros("Informe um número valido")      
    }

    return await this.customerUseCase.getCustomerCpf(cpf)
  }
}

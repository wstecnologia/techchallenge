import CustomerUseCase from '@/core/customer/domain/usecase/Customer.usecase'
import { Request, Response } from 'express'
import CustomerRepository from '@/adapters/out/persistence/Customer/CustomerRepository'
import Customer from '@/core/customer/domain/entities/Customer'

const customerRepository = new CustomerRepository()
//const customerUseCase = new CustomerUseCase(customerRepository)

export default class CustomerController {
  constructor(
    private customerUseCase:CustomerUseCase
  ){}

   async register(customer: Customer) {
    
    try {
      return await this.customerUseCase.registerCustomer(customer)
      
    } catch (e: any) {
      throw new Error(e.message)
    }
  }
}

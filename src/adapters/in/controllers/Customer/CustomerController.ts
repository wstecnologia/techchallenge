import CustomerUseCase from '@/core/customer/domain/usecase/Customer.usecase'
import { Request, Response } from 'express'
import CustomerRepository from '@/adapters/out/persistence/Customer/CustomerRepository'

const customerRepository = new CustomerRepository()
//const customerUseCase = new CustomerUseCase(customerRepository)

export default class CustomerController {
  constructor(
    private customerUseCase:CustomerUseCase
  ){}

   async register(req: Request, res: Response) {
    const { name, email, cpf } = req.body
    try {
      const customer = await this.customerUseCase.registerCustomer(name, email, cpf)
      res.status(201).json(customer)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}

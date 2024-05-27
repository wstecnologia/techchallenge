import InMemoryCustomerRepository from '@/adapters/out/persistence/Customer/InMemoryCustomerRepository'
import CustomerUseCase from '@/core/customer/domain/usecase/Customer.usecase'
import { Request, Response } from 'express'

const customerRepository = new InMemoryCustomerRepository()
const customerUseCase = new CustomerUseCase(customerRepository)

export default class CustomerController {
  static async register(req: Request, res: Response) {
    const { name, email, cpf } = req.body
    try {
      const customer = await customerUseCase.registerCustomer(name, email, cpf)
      res.status(201).json(customer)
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }
  }
}

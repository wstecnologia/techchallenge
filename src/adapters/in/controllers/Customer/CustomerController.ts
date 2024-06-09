import CustomerUseCase from "@/core/customer/domain/usecase/Customer.usecase"
import CustomerRepository from "@/adapters/out/persistence/Customer/CustomerRepository"
import Customer from "@/core/customer/domain/entities/Customer"
import { error } from "console"

export default class CustomerController {
  constructor(private customerUseCase: CustomerUseCase) {}

  async register(customer: Customer) {
    return await this.customerUseCase.registerCustomer(customer)
  }

  async listAll(page: number = 0) {
    return await this.customerUseCase.listAllCustomers(page)
  }

  async getCustomerCpf(cpf: string) {
    return await this.customerUseCase.getCustomerCpf(cpf)
  }
}

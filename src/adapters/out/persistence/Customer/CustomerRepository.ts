import db from '@/adapters/db/db'
import Customer from '@/core/customer/domain/entities/Customer'
import ICustomerRepository from '@/core/customer/ports/out/CustomerRepository'

export default class CustomerRepository implements ICustomerRepository {
  private customers: Customer[] = []

  async findByEmail(email: string): Promise<Customer | null> {
    return this.customers.find(customer => customer.email === email) || null
  }

  async save(customer: Customer): Promise<void> {
    await db.query(
      `insert into usuarios (id, nome, email, senha)
      values ($1, $2, $3, $4)`,
          [
            customer.id,
            customer.name,
            customer.email,
            customer.cpf,
          ]
      )
  }
}

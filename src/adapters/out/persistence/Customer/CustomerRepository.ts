import db from '@/adapters/db/db'
import Customer from '@/core/customer/domain/entities/Customer'
import ICustomerRepository from '@/core/customer/ports/out/CustomerRepository'

export default class CustomerRepository implements ICustomerRepository {

  async findByCpf(cpf: string): Promise<Customer> {
    const usuario = await db.oneOrNone(
        `select * from customers where cpf = $1`,
        [cpf]
    )
    if (!usuario) return null       
    return usuario
  }

  async listAll(): Promise<Customer[]|null> {

    const usuario:Customer[] = await db.any(
        `select * from customers`
    )

    if (usuario.length === 0 ) return null       
    return usuario 
  }  

  async findByEmail(email: string): Promise<Customer | null> {
    const usuario = await db.oneOrNone(
            `select * from customers where email = $1`,
            [email]
        )
        if (!usuario) return null       
    return usuario
  }

  async save(customer: Customer): Promise<void> {
    await db.query(
      `insert into customers (id, nome, email, senha)
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

import db from '@/adapters/out/persistence/DB/db'
import { User } from '@/core/authentication/domain/entities/User'
import { IUserRepository } from '@/core/authentication/ports/out/persistence/IUserRepository.usecase'

export class dbUserRepository  {
  private users: User[] = []

  public async save(user: User)  {
    await db.query(
      `insert into customers (id, name, email, cpf)
      values ($1, $2, $3, $4)`,
          [
            user.id,
            user.name,
            user.email,
            user.cpf,
          ]
      )
  }

  async findByEmail(email: string): Promise<User | null> {
       
    const usuario = await db.oneOrNone(
        `select * from customers where email = $1`,
        [email]
    )
    if (!usuario) return null       
    return usuario
  }
}

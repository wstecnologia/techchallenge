import { User } from '@/core/authentication/domain/entities/User'
import { IUserRepository } from '@/core/authentication/ports/out/persistence/IUserRepository.usecase'
import pgPromise from 'pg-promise'
import db from '../DB/db'

export class UserRepository implements IUserRepository {
  private pool: pgPromise.IDatabase<{}>

  constructor() {
    this.pool = db
  }
  public async save(user: User): Promise<void> {
    const query = 'INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)'
    const values = [user.id, user.name, user.email]
    await this.pool.none(query, values)
  }

  public async findByEmail(email: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE email = $1'
    const result = await this.pool.oneOrNone(query, [email])
    if (!result) {
      return null
    }

    const user: User = {
      id: result.id,
      name: result.name,
      email: result.email,
      cpf: result.cpf,
      //password: result.password,
    }
    return user
  }
}

import { User } from '@/core/authentication/domain/entities/User'
import { IUserRepository } from '@/core/authentication/ports/out/persistence/IUserRepository.usecase'

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = []

  public save(user: User): void {
    this.users.push(user)
  }

  public findByEmail(email: string): User | null {
    return this.users.find(user => user.email === email) || null
  }
}

import { User } from '@/core/authentication/domain/entities/User'
import { IUserRepository } from '@/core/authentication/ports/out/persistence/IUserRepository.usecase'

export class InMemoryUserRepository implements IUserRepository {
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  private users: User[] = []

  // public save(user: User): void {
  //   this.users.push(user)
  // }

  // public findByEmail(email: string): Promise  User | null {
  //   return this.users.find(user => user.email === email) || null
  // }
}

import { User } from '@/core/authentication/domain/entities/User'

export interface IUserRepository {
  save(user: User): void
  findByEmail(email: string): User | null
}

import { User } from '@/core/authentication/domain/entities/User'

export interface IRegisterUserUseCase {
  register(user: User): User
}

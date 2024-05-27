import { User } from '@/core/authentication/domain/entities/User'

export interface IRegisterUserUseCase {
  execute(user: User): User
}

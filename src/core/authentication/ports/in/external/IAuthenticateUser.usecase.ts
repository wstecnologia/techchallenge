import { User } from '../../../domain/entities/User'

export interface IAuthenticateUserUseCase {
  authenticate(email: string, password: string): User | null
}

import { User } from '../entities/User'
import { UserRepository } from '../../ports/out/UserRepository'
import { RegisterUserPort } from '../../ports/in/RegisterUserPort'
import { AuthenticateUserPort } from '../../ports/in/AuthenticateUserPort'

export class AuthenticationService implements RegisterUserPort, AuthenticateUserPort {
  constructor(private userRepository: UserRepository) {}

  public register(user: User): User {
    this.userRepository.save(user)
    return user
  }

  public authenticate(email: string, password: string): User | null {
    const user = this.userRepository.findByEmail(email)
    return user && user.password === password ? user : null
  }
}

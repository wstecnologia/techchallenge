import { IAuthenticateUserUseCase } from '../../ports/in/external/IAuthenticateUser.usecase'
import { IRegisterUserUseCase } from '../../ports/in/external/IRegisterUser.usecase'
import { IUserRepository } from '../../ports/out/persistence/IUserRepository.usecase'
import { User } from '../entities/User'

export class AuthenticationUseCase implements IRegisterUserUseCase, IAuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public execute(user: User): User {
    this.userRepository.save(user)
    return user
  }

  public authenticate(email: string, password: string): User | null {
    const user = this.userRepository.findByEmail(email)
    return user && user.password === password ? user : null
  }
}

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

  public authenticate(cpf: string ): User | null {
    const user = this.userRepository.findByEmail(cpf)
    return user && user.cpf === cpf ? user : null
  }
}

import { IRegisterUserUseCase } from '../../ports/in/external/IRegisterUser.usecase'
import { User } from '../entities/User'

export class RegisterUserUseCase {
  constructor(private registeUserUseCase: IRegisterUserUseCase) {}
  register(user: User): User {
    return this.registeUserUseCase.register(user)
  }
}

import { User } from '../domain/entities/User';
import { RegisterUserPort } from '../ports/in/RegisterUserPort';

export class RegisterUserUseCase {
  constructor(private registerUserPort: RegisterUserPort) { }

  public execute(user: User): User {
    return this.registerUserPort.register(user);
  }
}

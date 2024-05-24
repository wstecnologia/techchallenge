import { User } from '../domain/entities/User';
import { AuthenticateUserPort } from '../ports/in/AuthenticateUserPort';

export class AuthenticateUserUseCase {
  constructor(private authenticateUserPort: AuthenticateUserPort) { }

  public execute(email: string, password: string): User | null {
    return this.authenticateUserPort.authenticate(email, password);
  }
}

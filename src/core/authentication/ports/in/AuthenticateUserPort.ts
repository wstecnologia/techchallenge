import { User } from '../../domain/entities/User';

export interface AuthenticateUserPort {
  authenticate(email: string, password: string): User | null;
}

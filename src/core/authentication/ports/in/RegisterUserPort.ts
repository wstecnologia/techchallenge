import { User } from '../../domain/entities/User';

export interface RegisterUserPort {
  register(user: User): User;
}

import { User } from "../../../entities/User";

export interface RegisterUserPort {
  register(user: User): User;
}

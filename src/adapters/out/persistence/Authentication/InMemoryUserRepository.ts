import { User } from "@/core/authentication/domain/entities/User";
import { UserRepository } from "@/core/authentication/ports/out/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  public save(user: User): void {
    this.users.push(user);
  }

  public findByEmail(email: string): User | null {
    return this.users.find(user => user.email === email) || null
  }
}

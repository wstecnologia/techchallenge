import { Request, Response } from 'express'
import { User } from '@/core/authentication/domain/entities/User'
import { AuthenticateUserUseCase } from '@/core/authentication/usecases/AuthenticateUserUseCase'
import { RegisterUserUseCase } from '@/core/authentication/usecases/RegisterUserUseCase'

export class AuthenticationController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

  public register(req: Request, res: Response): void {
    const { id, name, email, cpf, password } = req.body
    const user = new User(id, name, email, cpf, password)
    const registeredUser = this.registerUserUseCase.execute(user)
    res.json(registeredUser)
  }

  public login(req: Request, res: Response): void {
    const { email, password } = req.body
    const user = this.authenticateUserUseCase.execute(email, password)
    if (user) {
      res.json(user)
    } else {
      res.status(401).send('Authentication failed')
    }
  }
}

/*
import { Request, Response } from 'express'
import { User } from '@/core/authentication/domain/entities/User'
import { RegisterUserUseCase } from '@/core/authentication/domain/usecases/RegisterUser.usecase'
import { AuthenticationUseCase } from '@/core/authentication/domain/usecases/Authentication.usecase'

export class AuthenticationController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private authenticationUseCase: AuthenticationUseCase,
  ) {}

  // public execute(req: Request, res: Response): void {
  //   const { id, name, email, cpf, password } = req.body
  //   const user = new User(id, name, email, cpf, password)
  //   const registeredUser = this.registerUserUseCase.execute(user)
  //   res.json(registeredUser)
  // }

  public execute(req: Request, res: Response): void {
    const { id, name, email, cpf, password } = req.body
    const user = new User(id, name, email, cpf, password)
    const registeredUser = this.registerUserUseCase.execute(user)
    res.json(registeredUser)
  }

  public login(req: Request, res: Response): void {
    const { email, password } = req.body

    const user = this.authenticationUseCase.execute(email, password)
    if (user) {
      res.json(user)
    } else {
      res.status(401).send('Authentication failed')
    }
  }
}
*/

import { Request, Response } from 'express'
import { User } from '@/core/authentication/domain/entities/User'
import { RegisterUserUseCase } from '@/core/authentication/domain/usecases/RegisterUser.usecase'
import { AuthenticationUseCase } from '@/core/authentication/domain/usecases/Authentication.usecase'

export class AuthenticationController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private authenticationUseCase: AuthenticationUseCase,
  ) {}

  public register(req: Request, res: Response): void {
    const { id, name, email, cpf, password } = req.body
    const user = new User(id, name, email, cpf, password)
    const registeredUser = this.registerUserUseCase.execute(user)
    res.json(registeredUser)
  }

  public login(req: Request, res: Response): void {
    const { email, password } = req.body
    const user = this.authenticationUseCase.authenticate(email, password)
    if (user) {
      res.json(user)
    } else {
      res.status(401).send('Authentication failed')
    }
  }
}

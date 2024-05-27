import { Router } from 'express'
import { AuthenticationController } from '@/adapters/in/controllers/Authentication/AuthenticationController'
import { AuthenticationUseCase } from '@/core/authentication/domain/usecases/Authentication.usecase'
import { InMemoryUserRepository } from '@/adapters/out/persistence/Authentication/InMemoryUserRepository'
import { RegisterUserUseCase } from '@/core/authentication/domain/usecases/RegisterUser.usecase'

const router = Router()

const userRepository = new InMemoryUserRepository()
const authenticateUserUseCase = new AuthenticationUseCase(userRepository)
const registerUserUseCase = new RegisterUserUseCase(authenticateUserUseCase)

const authController = new AuthenticationController(registerUserUseCase, authenticateUserUseCase)

router.post('/register', authController.register.bind(authController))
router.post('/login', authController.login.bind(authController))

export { router as routes }

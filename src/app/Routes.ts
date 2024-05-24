import { Router } from 'express'
import { AuthenticationController } from '@/adapters/in/external/Authentication/AuthenticationController'
import { AuthenticationService } from '@/core/authentication/domain/services/AuthenticationService'
import { AuthenticateUserUseCase } from '@/core/authentication/usecases/AuthenticateUserUseCase'
import { RegisterUserUseCase } from '@/core/authentication/usecases/RegisterUserUseCase'
import { InMemoryUserRepository } from '@/adapters/out/persistence/Authentication/InMemoryUserRepository'

const router = Router()

const userRepository = new InMemoryUserRepository()
const authService = new AuthenticationService(userRepository)
const registerUserUseCase = new RegisterUserUseCase(authService)
const authenticateUserUseCase = new AuthenticateUserUseCase(authService)
const authController = new AuthenticationController(registerUserUseCase, authenticateUserUseCase)

router.post('/register', authController.register.bind(authController))
router.post('/login', authController.login.bind(authController))

export { router as routes }

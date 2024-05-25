import { Request, Response, Router } from 'express'
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

//TechChalleger
router.post('/customers', (request:Request, response: Response)=>{ response.status(200).json({message:"Cliente cadastrado com sucesso"})})
router.get('/customers', (request:Request, response: Response)=>{
    let clientes:Object[] =[]
    clientes.push({nome:"Savio",email:"saviodba@gmail.com",cpf:"12345678909"})
    clientes.push({nome:"wilson",email:"wilson@gmail.com",cpf:"12345678909"})    

    response.status(200).json(clientes)
})

router.post('/products', (request:Request, response: Response)=>{ response.status(200).json({message:"Produto cadastrado com sucesso"})})

router.put('/products', (request:Request, response: Response)=>{     
    response.status(200).json({message:"Produto Alterado com sucesso"})
})

router.get('/products', (request:Request, response: Response)=>{
    let clientes:Object[] =[]
    clientes.push({nome:"Savio",email:"saviodba@gmail.com",cpf:"12345678909"})
    clientes.push({nome:"wilson",email:"wilson@gmail.com",cpf:"12345678909"})    

    response.status(200).json(clientes)})

router.delete('/products', (request:Request, response: Response)=>{     
    response.status(200).json({message:"Produto excluido com sucesso"})
})

router.post('/orders', authController.login.bind(authController))
router.post('/orders/payment', authController.login.bind(authController))

export { router as routes }

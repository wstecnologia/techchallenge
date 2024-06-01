import { Router, Request, Response } from 'express'
import { InMemoryUserRepository } from '@/adapters/out/persistence/Authentication/InMemoryUserRepository'
import { RegisterUserUseCase } from '@/core/authentication/domain/usecases/RegisterUser.usecase'
import { AuthenticationUseCase } from '@/core/authentication/domain/usecases/Authentication.usecase'
import { AuthenticationController } from '@/adapters/in/controllers/Authentication/AuthenticationController'

const router = Router()

const userRepository = new InMemoryUserRepository()
const authenticateUserUseCase = new AuthenticationUseCase(userRepository)
const registerUserUseCase = new RegisterUserUseCase(authenticateUserUseCase)

const authController = new AuthenticationController(registerUserUseCase, authenticateUserUseCase)

router.post('/register', (request: Request, response: Response) =>
  authController.register(request, response),
)
router.post('/login', (request: Request, response: Response) =>
  authController.login(request, response),
)

// TechChalleger

router.post('/auth', (request: Request, response: Response) => {
    const {tipo_autenticacao,name,email,cpf} = request.body

    console.log(tipo_autenticacao, name, email, cpf)
    authController.register(request, response),
    response.status(200).json({ message: 'Cliente autenticado com sucesso' })
    /*switch (tipo_autenticacao) {
      case 0:
        response.status(200).json({ message: 'Cliente autenticado com sucesso' })
      case 1:
          if(name === "" || description === ""){
            response.status(401).json({message: "Informe o nome e email"})
          }

        case 2:
          if(category === "" ){
            response.status(401).json({message: "Informe o numero do cpf"})
          }

      default:
        response.status(401).json({message: "Selecione um metodo de autenticação valido"})
    }*/

  }  
)

//**Products */
router.post('/products', (request: Request, response: Response) => {
  response.status(200).json({ message: 'Produto cadastrado com sucesso' })
})
router.put('/products', (request: Request, response: Response) => {
  response.status(200).json({ message: 'Produto alterado com sucesso' })
})
router.get('/products', (request: Request, response: Response) => {
  let produtos: Object[] = []
  produtos.push({ nome: 'Produto A', descricao: 'Descrição A', preco: 100 })
  produtos.push({ nome: 'Produto B', descricao: 'Descrição B', preco: 200 })

  response.status(200).json(produtos)
})
router.delete('/products', (request: Request, response: Response) => {
  response.status(200).json({ message: 'Produto excluído com sucesso' })
})

export { router as routes }

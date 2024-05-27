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
//**Customers */
router.post('/customers', (request: Request, response: Response) => {
  response.status(200).json({ message: 'Cliente cadastrado com sucesso' })
})

router.get('/customers', (request: Request, response: Response) => {
  let clientes: Object[] = []
  clientes.push({ nome: 'Savio', email: 'saviodba@gmail.com', cpf: '12345678909' })
  clientes.push({ nome: 'Wilson', email: 'wilson@gmail.com', cpf: '12345678909' })

  response.status(200).json(clientes)
})

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

//**Orders */
router.post('/new-order', (request: Request, response: Response) =>
  response.send({message: "Pedido criado com sucesso"})
)

router.post('/orders/add-item', (request: Request, response: Response) =>
  response.send({message: "Item adicionado com sucesso"})
)

/*
  Lista de progresso
  1. Recebido -> Cliente finalizou solucitação
  2. Em preparação -> Cozinha iniciou preparo
  3. Pronto -> Cozinha finalizou Preparo
  4. Finalizado -> Atendente entregou pedido ao cliente
*/
router.put('/orders/update-status', (request: Request, response: Response) =>
  response.send({message: "Status atualizado com sucesso com sucesso"})
)

router.get('/orders/status', (request: Request, response: Response) =>
  /*Cada setor vai ter o status especifico do progresso*/
  response.send({message: "lista de status retornada com sucesso"})
)

router.post('/orders/payment', (request: Request, response: Response) =>
  response.send({message: "Pagamento realizado com sucesso"})
)

export { router as routes }

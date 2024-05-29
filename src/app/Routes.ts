import { Router, Request, Response } from 'express'
import { InMemoryUserRepository } from '@/adapters/out/persistence/Authentication/InMemoryUserRepository'
import { RegisterUserUseCase } from '@/core/authentication/domain/usecases/RegisterUser.usecase'
import { AuthenticationUseCase } from '@/core/authentication/domain/usecases/Authentication.usecase'
import { AuthenticationController } from '@/adapters/in/controllers/Authentication/AuthenticationController'
import { dbUserRepository } from '@/adapters/out/persistence/Authentication/dbUserRepository'
import CustomerController from '@/adapters/in/controllers/Customer/CustomerController'
import CustomerUseCase from '@/core/customer/domain/usecase/Customer.usecase'

const router = Router()

const userRepository = new InMemoryUserRepository()
const authenticateUserUseCase = new AuthenticationUseCase(userRepository)
const registerUserUseCase = new RegisterUserUseCase(authenticateUserUseCase)
const repositorioUsuario = new dbUserRepository()
const customerUserCase = new CustomerUseCase(repositorioUsuario)

const authController = new AuthenticationController(registerUserUseCase, authenticateUserUseCase)

router.post('/register', (request: Request, response: Response) =>
  authController.register(request, response),
)

router.post('/login', (request: Request, response: Response) =>
  authController.login(request, response),
)

// TechChalleger

router.post('/auth', (request: Request, response: Response) => {
  const { tipo_autenticacao, name, email, cpf } = request.body

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
})

//**Customers */
router.post('/customers', (request: Request, response: Response) => {
  const registrarusuariocontroller = new CustomerController(customerUserCase)

  const user = registrarusuariocontroller.register(request.body)

  response.status(200).json(user)
})

router.get('/customers', async(request: Request, response: Response) => {
  try {
    const registrarusuariocontroller = new CustomerController(customerUserCase)
    const lstCustomers = await registrarusuariocontroller.listAll()
    response.status(200).json(lstCustomers)
  } catch (error) {
    response.status(400).json({ message: error.message })
  }

})

router.get('/customers/cpf', async(request: Request, response: Response) => {
  try {
    const { cpf } = request.query

    const registrarusuariocontroller = new CustomerController(customerUserCase)
    const customer = await registrarusuariocontroller.getCustomerCpf(cpf)
    response.status(200).json(customer)
  } catch (error) {
    response.status(400).json({ message: error.message })
  }

})

//**Categories */
router.post('/categories', async (request: Request, response: Response) => {
  const { name, description } = request.body

  const categoryController = new CategoryController()
  try {
    const result = await categoryController.save({ name, description })

    if (result.message === 'Category created successfully') {
      response.status(201).json(result)
    } else {
      response.status(400).json(result)
    }
  } catch (error) {
    response.status(500).json({ message: 'Internal server error' })
  }
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
  response.send({ message: 'Pedido criado com sucesso' }),
)

router.post('/orders/add-item', (request: Request, response: Response) =>
  response.send({ message: 'Item adicionado com sucesso' }),
)

/*
  Lista de progresso
  1. Pendente -> Cliente finalizou solucitação (Recebido)
  2. Em preparação -> Cozinha iniciou preparo
  3. Pronto -> Cozinha finalizou Preparo
  4. Finalizado -> Atendente entregou pedido ao cliente

  Lista de Setores
  1. Cozinha
  2. Balcão Entrega

*/
router.put('/orders/update-status', (request: Request, response: Response) =>
  response.send({ message: 'Status atualizado com sucesso com sucesso' }),
)

router.get('/orders/status', (request: Request, response: Response) =>
  /*Cada setor vai ter o status especifico do progresso*/
  response.send({ message: 'lista de status retornada com sucesso' }),
)

router.post('/orders/payment', (request: Request, response: Response) =>
  response.send({ message: 'Pagamento realizado com sucesso' }),
)

export { router as routes }

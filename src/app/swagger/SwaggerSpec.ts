import swaggerJsdoc from 'swagger-jsdoc'
import { customerPath } from './paths/customersPaths'
import { productPath } from './paths/productsPaths'
import { orderPaths } from './paths/orderPaths'

const combinetPaths = {
    ...customerPath,
    ...productPath,
    ...orderPaths
}

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Techchalleger Api Lanchonete WS Documentation',
      version: '1.0.0',
    },

    paths: combinetPaths 
},

  apis: [],
}

const swaggerSpec = swaggerJsdoc(options)
export default swaggerSpec

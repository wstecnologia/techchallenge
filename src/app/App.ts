import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser  from 'body-parser'
import { routes } from './Routes'

import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'
import { allRoutes } from './routes/index'

const app = express()

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', routes)
app.use('/api',allRoutes)

export default app

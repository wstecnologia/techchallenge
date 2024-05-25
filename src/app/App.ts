import express from 'express'
import bodyParser from 'body-parser'
import { routes } from './Routes'

import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'

const app = express()

app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', routes)

export default app

import {} from 'dotenv/config'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import chalk from 'chalk'
import express from 'express'
import config from './config/master.js'
import logger from './logs/logger.js'
import EventSchema from './graphql/schemas/event_schema.js'

import './db/mongoose.js'

const PORT = config.server.port
const app = express()

app.use(logger)
app.use('/events/graphiql', graphiqlExpress({ endpointURL: '/events/graphql' }))
app.use('/events/graphql', bodyParser.json(), graphqlExpress({ schema: EventSchema }))

app.listen(PORT, () => {
  console.log(chalk.green('Server running on port', chalk.white(PORT)))
})

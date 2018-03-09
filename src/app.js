require('dotenv').config()
const { graphqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const express = require('express')
const config = require('./config/master.js')
const logger = require('./logs/logger.js')
const EventSchema = require('./graphql/schemas/event_schema.js')

require('./db/mongoose.js')

const PORT = config.server.port
const app = express()

app.use(logger)
app.use('/events/', bodyParser.json(), graphqlExpress({ schema: EventSchema }))

app.listen(PORT, () => {
  console.log(chalk.green('Server running on port', chalk.white(PORT)))
})

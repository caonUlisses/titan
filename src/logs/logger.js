const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const fs = require('fs')

const logDirectory = __dirname
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const stream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
})

const logger = morgan('combined', { stream })

module.exports = logger

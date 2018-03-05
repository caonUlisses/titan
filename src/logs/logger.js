import morgan from 'morgan'
import rfs from 'rotating-file-stream'
import fs from 'fs'

const logDirectory = __dirname
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const stream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
})

const logger = morgan('combined', { stream })

export default logger

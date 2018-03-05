import mongoose from 'mongoose'
import chalk from 'chalk'
import config from './../config/master.js'

const DB_URI = config.db.uri

export default mongoose.connect(DB_URI, () => {
  console.log(chalk.green('Connected to MongoDB @', chalk.blue(DB_URI)))
})

const mongoose = require('mongoose')
const chalk = require('chalk')
const config = require('./../config/master.js')

const DB_URI = config.db.uri

module.exports = mongoose.connect(DB_URI, () => {
  console.log(chalk.green('Connected to MongoDB @', chalk.blue(DB_URI)))
})

const env = process.env

module.exports = {
  app: {
    name: 'Titan'
  },
  db: {
    uri: env.DB_URI || 'mongodb://localhost:27017/titan'
  },
  server: {
    port: env.SERVER_PORT || 2801
  }
}

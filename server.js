// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const address =  process.env.ADDRESS ?  process.env.ADDRESS : '127.0.0.1'
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(port, address)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

import fastify from 'fastify'
import routes from './routes'


const server = fastify({
    logger: true
})

server.register(routes)

server.listen(3000, (err: any, address: any) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})

import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/health', (req, rep) => {
  rep.send('ok');
})

export {fastify}
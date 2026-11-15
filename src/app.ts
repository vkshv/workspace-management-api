import { fastify } from "./server.js";

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`);
})

const signals = ['SIGINT', 'SIGTERM'];

for (const signal of signals) {
  process.on(signal, () => {
    console.log('Server stopped successfully');
    fastify.close();
  })
}
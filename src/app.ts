import Fastify from "fastify";

export function buildApp() {
  const app = Fastify();

  app.get('/health', (req, rep) => {
    rep.send({status: 'ok'});
  })

  return app;
}

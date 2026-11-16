import { buildApp } from "./app.js";
import 'dotenv/config'

const app = buildApp();

app.listen({
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT || 3000)
}, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit()
  }
  console.log(`Server is now listening on ${address}`);
})

const signals = ['SIGINT', 'SIGTERM'];

for (const signal of signals) {
  process.on(signal, async () => {
    try {
      await app.close();
      console.log('Server stopped successfully');
    } catch (error) {
      console.error('Server stopped unsuccessfully :(');
    }
  })
}

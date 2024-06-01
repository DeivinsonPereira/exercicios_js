import { server } from './server/server';

server.listen(process.env.PORT || 3000, () => console.log(`Porta: ${process.env.PORT || 3000}`));
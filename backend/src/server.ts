import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import routes from './routes';

const server = express();

server.use(cors({ exposedHeaders: 'X-Total-Count' }));
server.use(express.json());
server.use(routes);
server.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', 'uploads')),
);

export default server;

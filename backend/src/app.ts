import dotenv from 'dotenv';

import server from './server';
import './db/connection';

dotenv.config();

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});

import dotenv from 'dotenv';

import app from './app';
import './db/connection';

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});

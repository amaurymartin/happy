import express from 'express';

const routes = express.Router();

// Healthcheck
routes.get('/healthcheck', (_req, res) => {
  res.status(204).send();
});

export default routes;

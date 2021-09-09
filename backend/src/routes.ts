import express from 'express';
import OrphanagesController from './controllers/orphanagesController';

const routes = express.Router();

// Healthcheck
routes.get('/healthcheck', (_req, res) => {
  res.status(204).send();
});

// Orphanages
routes.post('/orphanages', OrphanagesController.create);

export default routes;

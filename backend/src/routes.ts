import express from 'express';
import multer from 'multer';

import multerConfig from '../multerConfig';

import OrphanagesController from './controllers/orphanagesController';
import ImagesController from './controllers/orphanages/imagesController';

const routes = express.Router();
const upload = multer(multerConfig);

// Healthcheck
routes.get('/healthcheck', (_req, res) => {
  res.status(204).send();
});

// Orphanages
routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:key', OrphanagesController.show);
routes.put('/orphanages/:key', OrphanagesController.update);

// Orphanages Images
routes.post(
  '/orphanages/:key/images',
  upload.array('images'),
  ImagesController.create,
);

export default routes;

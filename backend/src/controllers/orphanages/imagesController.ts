import { Request, Response } from 'express';

import orphanageRepository from '../../models/repositories/orphanageRepository';
import imageRepository from '../../models/repositories/imageRepository';

class ImagesController {
  static async create(req: Request, res: Response) {
    const { key } = req.params;

    // eslint-disable-next-line no-undef
    const images = (req.files as Express.Multer.File[]) || [];
    const filesNames = images.map((image) => image.filename);

    const orphanage = await orphanageRepository.show(key);
    if (!orphanage)
      return res.status(404).json({
        errors: {
          message: 'Not Found',
        },
      });

    const result = await imageRepository.create(orphanage, filesNames);
    if (!result)
      return res.status(422).json({
        errors: {
          message: 'Error on uploading images. Please try again!',
        },
      });

    return res.status(201).json({});
  }
}

export default ImagesController;

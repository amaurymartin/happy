import { getRepository } from 'typeorm';

import Orphanage from '../entities/orphanage';
import OrphanageImage from '../entities/orphanageImage';

class ImageRepository {
  static async create(orphanage: Orphanage, filesNames: String[]) {
    const parsedImages = filesNames.map((fileName) => ({
      orphanage,
      path: fileName,
    })) as OrphanageImage[];

    const orphanageImages = getRepository(OrphanageImage).create(parsedImages);

    return (
      getRepository(OrphanageImage)
        .save(orphanageImages)
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error))
    );
  }
}

export default ImageRepository;

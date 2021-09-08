import { getRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import Address from '../entities/address';

import Orphanage from '../entities/orphanage';

class OrphanageRepository {
  static async create(
    name: string,
    nickname: string,
    about: string,
    instructions: string,
    address: Address,
  ) {
    const repository = getRepository(Orphanage);

    const orphanage = repository.create({
      key: uuidv4(),
      name,
      nickname,
      about,
      instructions,
      address,
    });

    // eslint-disable-next-line no-console
    return repository.save(orphanage).catch((error) => console.error(error));
  }
}

export default OrphanageRepository;

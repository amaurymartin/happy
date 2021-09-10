import { EntityManager, getRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import Address from '../entities/address';

import Orphanage from '../entities/orphanage';

class OrphanageRepository {
  static async create(
    manager: EntityManager,
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
    return manager.save(orphanage).catch((error) => console.error(error));
  }

  // eslint-disable-next-line no-unused-vars
  static async index(city: string, state: string, country: string) {
    const repository = getRepository(Orphanage);

    return repository
      .find({
        relations: ['address', 'schedules'],
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        return [];
      });
  }

  static async show(key: string) {
    const repository = getRepository(Orphanage);

    const orphanages: Orphanage[] = await repository
      .find({
        relations: ['address', 'schedules'],
        where: { key },
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        return [] as Orphanage[];
      });

    return orphanages[0];
  }
}

export default OrphanageRepository;

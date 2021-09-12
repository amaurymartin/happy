import { EntityManager, getRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import Orphanage from '../entities/orphanage';
import Address from '../entities/address';

class OrphanageRepository {
  static async create(
    manager: EntityManager,
    name: string,
    nickname: string,
    about: string,
    instructions: string,
    address: Address,
  ) {
    const orphanage = getRepository(Orphanage).create({
      key: uuidv4(),
      name,
      nickname,
      about,
      instructions,
      address,
    });

    return manager.save(orphanage).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);

      return {} as Orphanage;
    });
  }

  // eslint-disable-next-line no-unused-vars
  static async index(city: string, state: string, country: string) {
    return getRepository(Orphanage)
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
    return getRepository(Orphanage)
      .findOne({
        relations: ['address', 'schedules'],
        where: { key },
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        return undefined;
      });
  }

  static async update(
    manager: EntityManager,
    key: string,
    name: string,
    nickname: string,
    about: string,
    instructions: string,
  ) {
    const oldOrphanage = await getRepository(Orphanage)
      .findOne({
        where: { key },
        relations: ['address', 'schedules'],
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        return undefined;
      });

    if (!oldOrphanage) return {} as Orphanage;

    const updatedOrphanage = await getRepository(Orphanage).preload({
      id: oldOrphanage.id,
      name,
      nickname,
      about,
      instructions,
    });

    if (!updatedOrphanage) return {} as Orphanage;

    updatedOrphanage.address = oldOrphanage.address;
    updatedOrphanage.schedules = oldOrphanage.schedules;

    return manager.save(updatedOrphanage).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);

      return {} as Orphanage;
    });
  }
}

export default OrphanageRepository;

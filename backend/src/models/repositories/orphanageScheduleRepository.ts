import { getRepository } from 'typeorm';

import OrphanageSchecule from '../entities/orphanageSchecule';
import { Schedule } from '../types/schedule';

class OrphanageScheculeRepository {
  static async create(schedules: Schedule[]) {
    const repository = getRepository(OrphanageSchecule);

    const orphanageSchecules = repository.create(schedules);

    // eslint-disable-next-line no-console
    return repository
      .save(orphanageSchecules)
      .catch((error) => console.error(error));
  }
}

export default OrphanageScheculeRepository;

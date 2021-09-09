import { EntityManager, getRepository } from 'typeorm';
import Orphanage from '../entities/orphanage';

import OrphanageSchecule from '../entities/orphanageSchecule';
import { Schedule } from '../types/schedule';

class OrphanageScheculeRepository {
  static async create(
    manager: EntityManager,
    orphanage: Orphanage,
    schedules: Schedule[],
  ) {
    const repository = getRepository(OrphanageSchecule);

    if (!schedules) return undefined;

    const parsedSchecules = schedules.map((schedule) => ({
      orphanage,
      weekDay: schedule.weekDay,
      startsAt: schedule.startsAt,
      endsAt: schedule.endsAt,
    }));

    const orphanageSchecules = repository.create(parsedSchecules);

    return (
      manager
        .save(orphanageSchecules)
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error))
    );
  }
}

export default OrphanageScheculeRepository;

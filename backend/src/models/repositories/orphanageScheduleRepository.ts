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
    if (!schedules) return undefined;

    const parsedSchecules = schedules.map((schedule) => ({
      orphanage,
      weekDay: schedule.weekDay,
      startsAt: schedule.startsAt,
      endsAt: schedule.endsAt,
    }));

    const orphanageSchecules =
      getRepository(OrphanageSchecule).create(parsedSchecules);

    return (
      manager
        .save(orphanageSchecules)
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error))
    );
  }

  static async findByOrphanage(orphanageId: number) {
    return getRepository(OrphanageSchecule)
      .find({
        where: { orphanage: orphanageId },
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        return [];
      });
  }

  static async destroyAll(manager: EntityManager, orphanageId: number) {
    const orphanageSchecules =
      await OrphanageScheculeRepository.findByOrphanage(orphanageId);

    manager.remove(orphanageSchecules);
  }
}

export default OrphanageScheculeRepository;

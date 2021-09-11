import { Request, Response } from 'express';
import {
  EntityManager,
  getConnection,
  Transaction,
  TransactionManager,
} from 'typeorm';

import { OrphanageCreate } from '../models/types/orphanageCreate';

import addressRepository from '../models/repositories/addressRepository';
import orphanageRepository from '../models/repositories/orphanageRepository';
import orphanageScheculeRepository from '../models/repositories/orphanageScheduleRepository';
import Orphanage from '../models/entities/orphanage';

class OrphanagesController {
  @Transaction()
  static async create(
    @TransactionManager() manager: EntityManager,
    req: Request,
    res: Response,
  ) {
    const payload: OrphanageCreate = req.body;
    const { name, nickname, about, instructions } = payload.orphanage;
    const {
      latitude,
      longitude,
      street,
      number,
      complement,
      zipCode,
      city,
      state,
      country,
    } = payload.orphanage.address;
    const { schedules } = payload.orphanage;

    let orphanage;
    let orphanageSchedules;

    await getConnection().transaction(async () => {
      const address = await addressRepository.create(
        manager,
        latitude,
        longitude,
        street,
        number,
        complement,
        zipCode,
        state,
        city,
        country,
      );

      if (!address) return;

      orphanage = await orphanageRepository.create(
        manager,
        name,
        nickname,
        about,
        instructions,
        address,
      );

      if (!orphanage) return;

      if (schedules) {
        orphanageSchedules = await orphanageScheculeRepository.create(
          manager,
          orphanage,
          schedules,
        );
      }
    });

    if (!orphanage || (schedules && !orphanageSchedules)) {
      return res
        .status(422)
        .json({ error: 'Error on creating educator. Check your data!' });
    }

    return res.status(201).json(orphanage);
  }

  static async index(req: Request, res: Response) {
    const { city, state, country } = req.query;

    const orphanages: Orphanage[] = await orphanageRepository.index(
      String(city),
      String(state),
      String(country),
    );

    const count = orphanages.length || 0;
    res.header('X-Total-Count', count.toString());

    return res.status(200).json(orphanages);
  }

  static async show(req: Request, res: Response) {
    const { key } = req.params;

    const orphanage = await orphanageRepository.show(String(key));

    if (!orphanage)
      res.status(404).json({
        errors: {
          message: 'Not Found',
        },
      });

    return res.status(200).json(orphanage);
  }
}

export default OrphanagesController;

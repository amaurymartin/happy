import { Address } from './address';
import { Schedule } from './schedule';

export type OrphanageCreate = {
  orphanage: {
    name: string;
    nickname: string;
    about: string;
    instructions: string;
    address: Address;
    schedules: Schedule[];
  };
};

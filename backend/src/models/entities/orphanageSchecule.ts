import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanage_schedules')
export default class OrphanageSchecule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('orphanage_id')
  orphanageId: number;

  @Column('week_day')
  weekDay: number;

  @Column('starts_at')
  startsAt: string;

  @Column('ends_at')
  endsAt: string;

  @Column('created_at')
  createdAt: Date;

  @Column('updated_at')
  updatedAt: Date;
}

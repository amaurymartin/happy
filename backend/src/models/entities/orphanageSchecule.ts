import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Orphanage from './orphanage';

@Entity('orphanage_schedules')
export default class OrphanageSchecule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Orphanage, (orphanage) => orphanage.schedules)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;

  @Column({ name: 'week_day' })
  weekDay: number;

  @Column({ name: 'starts_at' })
  startsAt: string;

  @Column({ name: 'ends_at' })
  endsAt: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

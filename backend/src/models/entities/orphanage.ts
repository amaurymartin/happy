import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Address from './address';
import OrphanageImage from './orphanageImage';
import OrphanageSchecule from './orphanageSchecule';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  key: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => OrphanageSchecule, (schedule) => schedule.orphanage)
  schedules: OrphanageSchecule[];

  @OneToMany(() => OrphanageImage, (image) => image.orphanage)
  images: OrphanageImage[];
}

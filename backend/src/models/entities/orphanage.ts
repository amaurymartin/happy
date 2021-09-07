import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('address_id')
  addressId: number;

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

  @Column('created_at')
  createdAt: Date;

  @Column('updated_at')
  updatedAt: Date;
}

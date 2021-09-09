import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

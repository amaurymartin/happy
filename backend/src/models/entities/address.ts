import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column('zip_code')
  zipCode: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column('created_at')
  createdAt: Date;

  @Column('updated_at')
  updatedAt: Date;
}

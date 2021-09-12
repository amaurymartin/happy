import { EntityManager, getRepository } from 'typeorm';

import Address from '../entities/address';

class AddressRepository {
  static async create(
    manager: EntityManager,
    latitude: number,
    longitude: number,
    street: string,
    number: string,
    complement: string,
    zipCode: string,
    city: string,
    state: string,
    country: string,
  ) {
    const address = getRepository(Address).create({
      latitude,
      longitude,
      street,
      number,
      complement,
      zipCode,
      city,
      state,
      country,
    });

    // eslint-disable-next-line no-console
    return manager.save(address).catch((error) => console.error(error));
  }

  static async update(
    manager: EntityManager,
    addressId: number,
    latitude: number,
    longitude: number,
    street: string,
    number: string,
    complement: string,
    zipCode: string,
    city: string,
    state: string,
    country: string,
  ) {
    const address = await getRepository(Address).preload({
      id: addressId,
      latitude,
      longitude,
      street,
      number,
      complement,
      zipCode,
      city,
      state,
      country,
    });

    // eslint-disable-next-line no-console
    return manager.save(address).catch((error) => console.error(error));
  }
}

export default AddressRepository;

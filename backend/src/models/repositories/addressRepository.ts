import { getRepository } from 'typeorm';

import Address from '../entities/address';

class AddressRepository {
  static async create(
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
    const repository = getRepository(Address);

    const address = repository.create({
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
    return repository.save(address).catch((error) => console.error(error));
  }
}

export default AddressRepository;

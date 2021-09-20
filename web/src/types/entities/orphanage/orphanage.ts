import Address from '../address';
import Schedule from './schedule';
import Image from './image';

type Orphanage = {
  key: string;
  name: string;
  nickname: string;
  about: string;
  instructions: string;
  address: Address;
  schedules: Schedule[];
  images: Image[];
};

export default Orphanage;

import Address from './IAddress';

export default interface Client {
  _id?: string;
  name: string;
  address: Address;
  email: string;
  mobile: string;
  phone: string;
  notes: string;
  deleted: boolean;
}

import Client from './IClient';
import Address from './IAddress';
import Price from './IPrice';
import JobStatus from './IJobStatus';

export default interface Job {
  jobID: number;
  date: Date;
  client: Client;
  location: Address;
  desription: string;
  notes: string;
  previousRefs: [number];
  pricing: [Price];
  status: JobStatus;
  dateCompleted: Date;
  invoiced: boolean;
  invoicePaid: boolean;
  purchaseOrder: string;
  completedBy: string;
  deleted: boolean;
}

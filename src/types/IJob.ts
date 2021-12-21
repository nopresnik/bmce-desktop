/* eslint-disable @typescript-eslint/no-explicit-any */
import Address from './IAddress';
import JobStatus from './IJobStatus';
import Price from './IPrice';

export default interface Job {
  jobID: string;
  date: Date;
  client: any;
  location: Address;
  description: string;
  notes: string;
  previousRefs: number[];
  pricing: Price[];
  totalPrice?: number;
  status: JobStatus;
  dateCompleted: Date;
  invoiced: boolean;
  invoicePaid: boolean;
  purchaseOrder: string;
  completedBy: string;
  deleted: boolean;
}
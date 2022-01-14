type ClientID = string;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
export interface Client {
  _id: ClientID;
  name: string;
  address: Address;
  email: string;
  mobile: string;
  phone: string;
  notes: string;
  deleted: boolean;
}

export interface Job {
  jobID: number;
  date: Date;
  client: Client | ClientID;
  location: Address;
  description: string;
  notes: string;
  previousRefs: number[];
  pricing: Price[];
  status: string;
  dateCompleted: Date;
  invoiced: boolean;
  invoicePaid: boolean;
  purchaseOrder: string;
  completedBy: string;
  deleted: boolean;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postcode: number;
}

export interface Price {
  description: string;
  staff: string;
  price: number;
}

export interface Stats {
  active: number;
  hold: number;
  awaitingInvoicing: number;
  unpaid: number;
  month: number;
  year: number;
}

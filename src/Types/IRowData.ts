export default interface RowData {
  data: {
    jobID: number;
    date: Date;
    location: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      postcode: string;
    };
  };
}

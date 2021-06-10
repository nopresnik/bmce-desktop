interface RowData {
  data: {
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

const dateParser = (params: RowData): string => {
  const { date } = params.data;
  return new Date(date).toLocaleDateString();
};

const addressParser = (params: RowData): string => {
  const { line1, line2, city, state, postcode } = params.data.location;
  return `${line1 || ''} ${line2 || ''} ${city || ''} ${state || ''} ${
    postcode || ''
  }`;
};

export default { dateParser, addressParser };

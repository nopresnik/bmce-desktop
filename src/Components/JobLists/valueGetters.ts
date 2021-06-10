import RowData from '../../Types/IRowData';

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

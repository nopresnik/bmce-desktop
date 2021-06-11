import APIResult from '../../Types/IAPIResult';
import Job from '../../Types/IJob';

const dateParser = (job: APIResult<Job>): string => {
  const { date } = job.data;
  return new Date(date).toLocaleDateString();
};

const addressParser = (job: APIResult<Job>): string => {
  const { line1, line2, city, state, postcode } = job.data.location;
  return `${line1 || ''} ${line2 || ''} ${city || ''} ${state || ''} ${
    postcode || ''
  }`;
};

export default { dateParser, addressParser };

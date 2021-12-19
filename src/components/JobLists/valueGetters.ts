import helpers from '../../helpers';
import APIResult from '../../types/IAPIResult';
import Job from '../../types/IJob';

const dateParser = (job: APIResult<Job>): string => {
  const { date } = job.data;
  return new Date(date).toLocaleDateString('en-AU');
};

const completedDateParser = (job: APIResult<Job>): string => {
  const { dateCompleted } = job.data;
  return new Date(dateCompleted).toLocaleDateString('en-AU');
};

const addressParser = (job: APIResult<Job>): string => {
  const { line1, line2, city, state, postcode } = job.data.location;
  return `${line1 || ''} ${line2 || ''} ${city || ''} ${state || ''} ${
    postcode || ''
  }`;
};

const statusParser = (job: APIResult<Job>): string => {
  const { status } = job.data;

  return status.charAt(0) + status.slice(1).toLowerCase();
};

const priceParser = (job: APIResult<Job>): string => {
  const { totalPrice } = job.data;

  return '$' + totalPrice.toLocaleString();
};

const jobNumberParser = (job: APIResult<Job>): string => {
  const { jobID } = job.data;

  return helpers.parseJobNumber(jobID);
};

export default {
  dateParser,
  completedDateParser,
  addressParser,
  statusParser,
  priceParser,
  jobNumberParser,
};

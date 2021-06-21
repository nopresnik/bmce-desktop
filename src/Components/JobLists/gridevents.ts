import Helpers from '../../Helpers';
import APIResult from '../../Types/IAPIResult';
import Job from '../../Types/IJob';

const openJob = (params: APIResult<Job>): void => {
  return Helpers.openJob(params.data.jobID);
};

export default { openJob };

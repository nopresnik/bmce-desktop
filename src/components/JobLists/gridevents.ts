import Helpers from '../../helpers';
import APIResult from '../../types/IAPIResult';
import Job from '../../types/IJob';

const openJob = (params: APIResult<Job>): void => {
  return Helpers.openJob(params.data.jobID);
};

export default { openJob };

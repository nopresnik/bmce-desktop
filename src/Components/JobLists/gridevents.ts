import APIResult from '../../Types/IAPIResult';
import Job from '../../Types/IJob';

const openJob = (params: APIResult<Job>): void => {
  console.log(params);
  window.open(
    `#/job/${params.data.jobID}`,
    'mywindow',
    `title=View Job ${params.data.jobID},width=1080,height=720`
  );
};

export default { openJob };

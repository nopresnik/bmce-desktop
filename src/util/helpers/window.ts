import { parseJobNo } from './parsers';

export const newExternalJobWindow = (jobID: number) => {
  window.open(
    `#/jobs/edit/${jobID}/external`,
    JSON.stringify({
      title: `View Job ${parseJobNo(jobID)}`,
      width: 1080,
      height: 720,
    })
  );
};

const parseJobNumber = (jobID: string | number): string => {
  if (jobID) {
    return jobID.toString().replace('.', '-');
  }

  return '';
};

const openJob = (jobID: number | string): void => {
  let id: number | string = jobID;

  if (typeof jobID === 'string') {
    id = parseFloat(jobID.replace('-', '.'));
  }

  window.open(
    `#/job/${id}`,
    JSON.stringify({
      title: `View Job ${parseJobNumber(jobID)}`,
      width: 1080,
      height: 720,
    })
  );
};

export default { openJob, parseJobNumber };

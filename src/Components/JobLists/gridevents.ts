import RowData from '../../Types/IRowData';

const openJob = (params: RowData): void => {
  window.open(
    `#/job/${params.data.jobID}`,
    '',
    `title=View Job ${params.data.jobID}`
  );
};

export default { openJob };

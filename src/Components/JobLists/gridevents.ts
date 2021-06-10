import RowData from '../../Types/IRowData';

// TODO: OPEN JOB WINDOW
const openJob = (params: RowData): void => {
  alert('It works: ' + params.data.jobID);
};

export default { openJob };

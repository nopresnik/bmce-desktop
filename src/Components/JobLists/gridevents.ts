import RowData from '../../Types/IRowData';

// TODO: OPEN JOB WINDOW
const openJob = (params: RowData): void => {
  // alert('It works: ' + params.data.jobID);
  window.open('#/test', '_blank', `title=View Job ${params.data.jobID}`);
  // handleNewWindow();
};

export default { openJob };

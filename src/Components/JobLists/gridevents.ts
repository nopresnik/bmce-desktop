import RowData from '../../Types/IRowData';

const openJob = (params: RowData): void => {
  window.open(
    `#/job/${params.data.jobID}`,
    'mywindow',
    `title=View Job ${params.data.jobID},width=1080,height=720`
  );
};

export default { openJob };

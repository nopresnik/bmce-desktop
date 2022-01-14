import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useJobs } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { JobTableColumn } from './JobTable.types';
import { columns } from './JobTableCols';

type JobTableProps = {
  apiStatus?: string;
  visibleCols: JobTableColumn[];
};

export const JobTable: React.VFC<JobTableProps> = ({
  apiStatus,
  visibleCols,
}) => {
  const navigate = useNavigate();
  const { jobs } = useJobs(apiStatus);

  const openJob = (jobID: number) => {
    navigate(`edit/${jobID}`);
  };

  return (
    <Box height={450}>
      <DataGrid
        rows={jobs}
        getRowId={(row) => row._id}
        columns={columns(visibleCols)}
        hideFooterPagination
        hideFooterSelectedRowCount
        onRowDoubleClick={(e) => openJob(e.row.jobID)}
      />
    </Box>
  );
};

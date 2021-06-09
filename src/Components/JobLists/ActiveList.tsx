import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import axios from 'axios';
import 'primereact/resources/themes/saga-green/theme.css';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';

const getActiveJobs = () => {
  return axios.get('http://localhost:3001/api/jobs/s/active');
};

const ActiveList: React.FC<Record<string, never>> = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getActiveJobs().then(({ data }) => setJobs(data.data));
  }, []);

  const columns = [
    { field: 'date', header: 'Date' },
    { field: 'jobID', header: 'Job #' },
    { field: 'client.name', header: 'Client' },
    { field: 'location.city', header: 'Location' },
    { field: 'description', header: 'Description' },
  ];

  const dynamicCols = columns.map((col) => {
    return (
      <Column
        key={col.field}
        sortField={col.field}
        field={col.field}
        header={col.header}
        sortable
      />
    );
  });

  return (
    <DataTable paginator rows={10} value={jobs}>
      {dynamicCols}
    </DataTable>
  );
};

export default ActiveList;

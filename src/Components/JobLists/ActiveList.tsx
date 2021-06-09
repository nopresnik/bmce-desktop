import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact, AgGridReactProps } from 'ag-grid-react';
import axios from 'axios';
import React, { useState } from 'react';

interface RowData {
  data: {
    date: Date;
    location: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      postcode: string;
    };
  };
}

const getActiveJobs = () => {
  return axios.get('http://localhost:3001/api/jobs/s/active');
};

const ActiveList: React.FC<Record<string, never>> = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params: AgGridReactProps) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    getActiveJobs().then(({ data }) => setRowData(data.data));
  };

  const firstDataRendered = () => {
    gridApi.sizeColumnsToFit();

    window.onresize = () => gridApi.sizeColumnsToFit();
  };

  const dateParser = (params: RowData) => {
    const { date } = params.data;
    return new Date(date).toLocaleDateString();
  };

  const addressParser = (params: RowData) => {
    const { line1, line2, city, state, postcode } = params.data.location;
    return `${line1 || ''} ${line2 || ''} ${city || ''} ${state || ''} ${
      postcode || ''
    }`;
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        onGridReady={onGridReady}
        onFirstDataRendered={firstDataRendered}
      >
        <AgGridColumn
          field="date"
          sortable={true}
          filter={true}
          maxWidth={125}
          minWidth={125}
          suppressAutoSize={true}
          valueGetter={dateParser}
        />
        <AgGridColumn
          field="jobID"
          sortable={true}
          filter={true}
          maxWidth={110}
          minWidth={110}
          suppressAutoSize={true}
          headerName="Job #"
        />
        <AgGridColumn
          field="client.name"
          sortable={true}
          filter={true}
          suppressSizeToFit={true}
        />
        <AgGridColumn
          field="location"
          headerName="Location"
          sortable={true}
          filter={true}
          valueGetter={addressParser}
          // suppressSizeToFit={true}
        />
        <AgGridColumn
          field="description"
          sortable={true}
          filter={true}
          // suppressSizeToFit={true}
        />
      </AgGridReact>
    </div>
  );
};

export default ActiveList;

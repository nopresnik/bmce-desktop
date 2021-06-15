import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React, { useState } from 'react';
import Api from '../../Api';
import gridevents from './gridevents';

interface PropTypes {
  children: React.ReactNode;
  getJobs: string;
}

const JobList: React.FC<PropTypes> = ({ getJobs, children }) => {
  const [gridApi, setGridApi] = useState(null);
  const [, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params: AgGridReactProps) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    Api.getJobs(getJobs).then(({ data }) => setRowData(data.data));
  };

  const firstDataRendered = () => {
    gridApi.sizeColumnsToFit();

    window.onresize = () => gridApi.sizeColumnsToFit();
  };

  return (
    <div
      className="ag-theme-alpine mb-3"
      style={{ height: '100%', width: '100%' }}
    >
      <AgGridReact
        rowData={rowData}
        onGridReady={onGridReady}
        onFirstDataRendered={firstDataRendered}
        gridOptions={{ onCellDoubleClicked: gridevents.openJob }}
      >
        {children}
      </AgGridReact>
    </div>
  );
};

export default JobList;

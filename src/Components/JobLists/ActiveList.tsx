import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React, { useState } from 'react';
import Api from '../../Api';
import gridevents from './gridevents';
import valueGetters from './valueGetters';

const ActiveList: React.FC<Record<string, never>> = () => {
  const [gridApi, setGridApi] = useState(null);
  const [, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params: AgGridReactProps) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    Api.getJobs('active').then(({ data }) => setRowData(data.data));
  };

  const firstDataRendered = () => {
    gridApi.sizeColumnsToFit();

    window.onresize = () => gridApi.sizeColumnsToFit();
  };

  return (
    <div
      className="ag-theme-alpine my-3"
      style={{ height: '100%', width: '100%' }}
    >
      <AgGridReact
        rowData={rowData}
        onGridReady={onGridReady}
        onFirstDataRendered={firstDataRendered}
        gridOptions={{ onCellDoubleClicked: gridevents.openJob }}
      >
        <AgGridColumn
          field="date"
          sortable={true}
          filter={true}
          maxWidth={125}
          minWidth={125}
          suppressAutoSize={true}
          valueGetter={valueGetters.dateParser}
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
          valueGetter={valueGetters.addressParser}
        />
        <AgGridColumn field="description" sortable={true} filter={true} />
      </AgGridReact>
    </div>
  );
};

export default ActiveList;

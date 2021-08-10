import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React, { useState } from 'react';
import Api from '../../Api';
import { default as valueGetters } from '../../Components/JobLists/valueGetters';

const Search: React.FC<Record<string, never>> = () => {
  const [gridApi, setGridApi] = useState(null);
  const [, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const fetchJobs = () => {
    Api.getJobs().then(({ data }) => {
      setRowData(data.data);
    });
  };

  const onGridReady = (params: AgGridReactProps) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    fetchJobs();
  };

  const firstDataRendered = () => {
    gridApi.sizeColumnsToFit();

    window.onresize = () => gridApi.sizeColumnsToFit();
  };

  return (
    <div className="d-flex flex-column vh-100">
      <div
        className="ag-theme-alpine flex-grow-1"
        style={{ height: '100%', width: '100%' }}
      >
        <AgGridReact
          rowData={rowData}
          rowSelection="single"
          onGridReady={onGridReady}
          onFirstDataRendered={firstDataRendered}
        >
          <AgGridColumn
            field="date"
            sortable={true}
            filter="agDateColumnFilter"
            maxWidth={125}
            minWidth={125}
            suppressAutoSize={true}
            valueGetter={valueGetters.dateParser}
            floatingFilter={true}
            suppressMenu={true}
          />
          <AgGridColumn
            field="jobID"
            sortable={true}
            filter="agNumberColumnFilter"
            maxWidth={110}
            minWidth={110}
            suppressAutoSize={true}
            headerName="Job #"
            floatingFilter={true}
            suppressMenu={true}
            valueGetter={valueGetters.jobNumberParser}
          />
          <AgGridColumn
            field="client.name"
            sortable={true}
            filter={true}
            suppressSizeToFit={true}
            floatingFilter={true}
            suppressMenu={true}
          />
          <AgGridColumn
            field="location"
            headerName="Location"
            sortable={true}
            filter={true}
            valueGetter={valueGetters.addressParser}
            floatingFilter={true}
            suppressMenu={true}
          />
          <AgGridColumn
            field="description"
            sortable={true}
            filter={true}
            floatingFilter={true}
            suppressMenu={true}
          />
          <AgGridColumn
            field="status"
            sortable={true}
            filter={true}
            maxWidth={150}
            minWidth={150}
            floatingFilter={true}
            suppressMenu={true}
            valueGetter={valueGetters.statusParser}
          />
          <AgGridColumn
            field="completedBy"
            headerName="By"
            sortable={true}
            filter={true}
            floatingFilter={true}
            maxWidth={110}
            minWidth={110}
            suppressMenu={true}
          />
          <AgGridColumn
            field="invoiced"
            maxWidth={110}
            minWidth={110}
            sortable={true}
            filter={true}
            floatingFilter={true}
            suppressMenu={true}
          />
          <AgGridColumn
            field="invoicePaid"
            headerName="Paid"
            maxWidth={110}
            minWidth={110}
            sortable={true}
            filter={true}
            floatingFilter={true}
            suppressMenu={true}
          />
        </AgGridReact>
      </div>
    </div>
  );
};

export default Search;

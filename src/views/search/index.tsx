import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridColumn, AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React, { useState } from 'react';
import { getJobs } from '../../api';
import { default as valueGetters } from '../../components/JobLists/valueGetters';

const Search: React.FC = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const fetchJobs = () => {
    getJobs().then(({ data }) => {
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
    sortByID();
    window.onresize = () => gridApi.sizeColumnsToFit();
  };

  const sortByID = () => {
    gridColumnApi.applyColumnState({
      state: [
        {
          colId: 'jobID',
          sort: 'desc',
        },
      ],
      defaultState: { sort: null },
    });
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
            valueFormatter={valueGetters.dateParser}
            floatingFilter={true}
            suppressMenu={true}
          />
          <AgGridColumn
            colId="jobID"
            field="jobID"
            sortable={true}
            // filter="agNumberColumnFilter"
            filter={true}
            maxWidth={110}
            minWidth={110}
            suppressAutoSize={true}
            headerName="Job #"
            floatingFilter={true}
            suppressMenu={true}
            valueFormatter={valueGetters.jobNumberParser}
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
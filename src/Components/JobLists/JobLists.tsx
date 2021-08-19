import { AgGridColumn } from 'ag-grid-react/lib/agGridColumn';
import React from 'react';
import JobList from './JobList';
import { default as valueGetters } from './valueGetters';

const Active: React.FC<Record<string, never>> = () => {
  return (
    <JobList getJobs="active">
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
        valueGetter={valueGetters.jobNumberParser}
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
    </JobList>
  );
};

const Hold: React.FC<Record<string, never>> = () => {
  return (
    <JobList getJobs="hold">
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
        valueGetter={valueGetters.jobNumberParser}
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
      <AgGridColumn field="notes" sortable={true} filter={true} />
    </JobList>
  );
};

const Invoicing: React.FC<Record<string, never>> = () => {
  return (
    <JobList getJobs="invoicing">
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
        valueGetter={valueGetters.jobNumberParser}
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
      <AgGridColumn
        field="dateCompleted"
        headerName="Completed"
        sortable={true}
        filter={true}
        maxWidth={125}
        minWidth={125}
        suppressAutoSize={true}
        valueGetter={valueGetters.completedDateParser}
      />
      <AgGridColumn
        field="totalPrice"
        headerName="Price"
        sortable={true}
        filter={true}
        maxWidth={110}
        minWidth={110}
        suppressAutoSize={true}
        valueGetter={valueGetters.priceParser}
        type="rightAligned"
      />
    </JobList>
  );
};

const Unpaid: React.FC<Record<string, never>> = () => {
  return (
    <JobList getJobs="unpaid">
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
        // valueGetter={valueGetters.jobNumberParser}
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
      <AgGridColumn
        field="totalPrice"
        headerName="Price"
        sortable={true}
        filter={true}
        maxWidth={110}
        minWidth={110}
        suppressAutoSize={true}
        valueGetter={valueGetters.priceParser}
        type="rightAligned"
      />
    </JobList>
  );
};

const Completed: React.FC<Record<string, never>> = () => {
  return (
    <JobList getJobs="completed">
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
        valueGetter={valueGetters.jobNumberParser}
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
      <AgGridColumn
        field="dateCompleted"
        headerName="Completed"
        sortable={true}
        filter={true}
        maxWidth={125}
        minWidth={125}
        suppressAutoSize={true}
        valueGetter={valueGetters.completedDateParser}
      />
      <AgGridColumn
        field="completedBy"
        headerName="By"
        sortable={true}
        filter={true}
        maxWidth={100}
        minWidth={100}
        suppressAutoSize={true}
      />
    </JobList>
  );
};

export default { Active, Hold, Invoicing, Unpaid, Completed };

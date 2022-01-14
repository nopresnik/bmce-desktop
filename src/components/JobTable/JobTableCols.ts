import { GridColDef } from '@mui/x-data-grid';
import {
  actionsRender,
  clientNameGetter,
  dateFormatter,
  jobNoFormatter,
  locationGetter,
  priceGetter,
  statusFormatter,
} from './gridValues';
import { JobTableColumn } from './JobTable.types';

export const columns = (visibleCols: JobTableColumn[]): GridColDef[] => [
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    valueFormatter: dateFormatter,
    hide: !visibleCols.includes(JobTableColumn.DATE),
  },
  {
    field: 'jobID',
    headerName: 'Job #',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    valueFormatter: jobNoFormatter,
    hide: !visibleCols.includes(JobTableColumn.JOB_NO),
  },
  {
    field: 'client',
    headerName: 'Client name',
    headerAlign: 'left',
    align: 'left',
    flex: 2,
    valueGetter: clientNameGetter,
    hide: !visibleCols.includes(JobTableColumn.CLIENT),
  },
  {
    field: 'location',
    headerName: 'Location',
    headerAlign: 'left',
    align: 'left',
    flex: 3,
    valueGetter: locationGetter,
    hide: !visibleCols.includes(JobTableColumn.LOCATION),
  },
  {
    field: 'description',
    headerName: 'Description',
    headerAlign: 'left',
    align: 'left',
    flex: 3,
    hide: !visibleCols.includes(JobTableColumn.DESCRIPTION),
  },
  {
    field: 'notes',
    headerName: 'Notes',
    headerAlign: 'left',
    align: 'left',
    flex: 3,
    hide: !visibleCols.includes(JobTableColumn.NOTES),
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    valueFormatter: statusFormatter,
    hide: !visibleCols.includes(JobTableColumn.STATUS),
  },
  {
    field: 'invoiced',
    headerName: 'Invoiced',
    type: 'boolean',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    hide: !visibleCols.includes(JobTableColumn.INVOICED),
  },
  {
    field: 'invoicePaid',
    headerName: 'Paid',
    type: 'boolean',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    hide: !visibleCols.includes(JobTableColumn.PAID),
  },
  {
    field: 'purchaseOrder',
    headerName: 'Purchase order',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    hide: !visibleCols.includes(JobTableColumn.PURCHASE_ORDER),
  },
  {
    field: 'dateCompleted',
    headerName: 'Completed',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    valueFormatter: dateFormatter,
    hide: !visibleCols.includes(JobTableColumn.COMPLETED),
  },
  {
    field: 'completedBy',
    headerName: 'By',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    hide: !visibleCols.includes(JobTableColumn.COMPLETED_BY),
  },
  {
    field: 'pricing',
    headerName: 'Price',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    valueGetter: priceGetter,
    hide: !visibleCols.includes(JobTableColumn.PRICE),
  },
  {
    field: 'Actions',
    headerName: '',
    width: 5,
    sortable: false,
    filterable: false,
    renderCell: actionsRender,
  },
];

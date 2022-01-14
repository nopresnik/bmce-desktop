import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material';
import {
  GridRenderCellParams,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { Price } from 'api/types.responses';
import { DateTime } from 'luxon';
import { parseJobNo } from 'util/helpers';
import { newExternalJobWindow } from 'util/helpers';

export const jobNoFormatter = (params: GridValueFormatterParams) => {
  return parseJobNo(params.value?.toString() || '');
};

export const dateFormatter = (params: GridValueFormatterParams) => {
  const value = DateTime.fromISO(params.value as string);
  return value.isValid ? value.toLocaleString() : '';
};

export const clientNameGetter = (params: GridValueGetterParams) =>
  params.row.client.name;

export const locationGetter = (params: GridValueGetterParams) => {
  const { line1, line2, city, state, postcode } = params.row.location;
  return `${line1 || ''} ${line2 || ''} ${city || ''} ${state || ''} ${
    postcode || ''
  }`;
};

export const statusFormatter = (params: GridValueFormatterParams) => {
  const status = params.value?.toString().toLowerCase() || '';
  return status.charAt(0).toUpperCase() + status?.slice(1);
};

export const priceGetter = (params: GridValueGetterParams) => {
  const pricing: Price[] = params.row.pricing;
  return (
    '$' + pricing.reduce((a, b) => a + b.price, 0).toFixed(2) ||
    Number(0).toFixed(2)
  );
};

export const actionsRender = (params: GridRenderCellParams) => {
  return (
    <IconButton onClick={() => newExternalJobWindow(params.row.jobID)}>
      <OpenInNewIcon fontSize="small" />
    </IconButton>
  );
};

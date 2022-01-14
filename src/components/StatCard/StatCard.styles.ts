import { Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
  width: 100%;
  padding: ${(props) => props.theme.spacing(1)};
`;

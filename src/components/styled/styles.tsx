import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledHeader = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(2)};
  display: flex;
`;

export const StyledPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing(2)};
`;

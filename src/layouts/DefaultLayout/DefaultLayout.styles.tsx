import { Box } from '@mui/system';
import styled from 'styled-components';

export const StyledSidebarBox = styled(Box)`
  display: flex;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  height: 100vh;
  max-height: 100vh;
`;

export const StyledContentBox = styled(Box)`
  flex-grow: 1;
  /* padding: ${(props) => props.theme.spacing(3)}; */
`;

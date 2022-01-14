import { Sidebar } from 'components';
import { StyledContentBox, StyledSidebarBox } from './DefaultLayout.styles';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <StyledSidebarBox>
      <Sidebar />
      <StyledContentBox>{children}</StyledContentBox>
    </StyledSidebarBox>
  );
};

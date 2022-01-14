import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Logo } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarLinks } from '../../constants';
import { LogoContainer } from './Sidebar.styles';

export const Sidebar: React.VFC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const DRAWER_WIDTH = 230;

  const isActive = (path: string, link: string) => {
    return path.includes(link);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        display: 'flex',
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <LogoContainer>
        <Logo width="50%" />
      </LogoContainer>
      <List>
        <Divider />
        {sidebarLinks.map((link) => (
          <ListItem
            key={link.route}
            onClick={() => navigate(link.route)}
            disablePadding
          >
            <ListItemButton selected={isActive(location.pathname, link.route)}>
              {link.icon && (
                <ListItemIcon>
                  <link.icon />
                </ListItemIcon>
              )}
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
    </Drawer>
  );
};

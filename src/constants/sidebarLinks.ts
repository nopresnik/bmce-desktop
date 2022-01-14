import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

interface SidebarLink {
  name: string;
  route: string;
  icon: React.VFC;
}

export const sidebarLinks: SidebarLink[] = [
  {
    name: 'Overview',
    route: '/overview',
    icon: HomeIcon,
  },
  {
    name: 'Jobs',
    route: '/jobs',
    icon: FormatListNumberedIcon,
  },
  {
    name: 'Clients',
    route: '/clients',
    icon: PeopleAltIcon,
  },
];

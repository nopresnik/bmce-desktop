import { CssBaseline } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

type ThemeProviderProps = {
  theme?: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const defaultTheme = createTheme({
    palette: {
      background: {
        default: '#f8f8f8',
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme || defaultTheme}>
      <ScThemeProvider theme={theme || defaultTheme}>
        <CssBaseline />
        {children}
      </ScThemeProvider>
    </MuiThemeProvider>
  );
};

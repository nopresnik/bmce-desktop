import { Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { StyledPaper } from './StatCard.styles';

type StatCardProps = {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  value: number;
  caption: string;
};

export const StatCard: React.VFC<StatCardProps> = ({
  color,
  value,
  caption,
}) => {
  const theme = useTheme();

  return (
    <StyledPaper sx={{ bgcolor: theme.palette[color].main }}>
      <Typography
        variant="h4"
        sx={{ color: theme.palette[color].contrastText }}
      >
        {value}
      </Typography>
      <Typography
        variant="button"
        sx={{ color: theme.palette[color].contrastText }}
      >
        {caption}
      </Typography>
    </StyledPaper>
  );
};

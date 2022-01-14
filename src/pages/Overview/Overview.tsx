import { Stack } from '@mui/material';
import { getStats } from 'api';
import { Stats } from 'api/types.responses';
import { StatCard, StyledHeader, StyledPageContainer } from 'components';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

export const Overview: React.VFC = () => {
  const getGreeting = (date: DateTime) => {
    const hours = date.hour;
    if (hours < 12) return 'Good morning';
    if (hours < 17) return 'Good afternoon';

    return 'Good evening';
  };

  const [stats, setStats] = useState<Stats>({} as Stats);

  useEffect(() => {
    getStats().then(({ data }) => setStats(data.data));
  }, []);

  return (
    <StyledPageContainer>
      <StyledHeader variant="h4">{getGreeting(DateTime.now())}!</StyledHeader>
      <Stack spacing={2} direction="row">
        <StatCard
          color="primary"
          value={stats.active || 0}
          caption="Jobs active"
        />
        <StatCard
          color="warning"
          value={stats.hold || 0}
          caption="Jobs on hold"
        />
        <StatCard
          color="info"
          value={stats.awaitingInvoicing || 0}
          caption="Jobs awaiting invoicing"
        />
        <StatCard
          color="error"
          value={stats.unpaid || 0}
          caption="Unpaid invoices"
        />
      </Stack>
    </StyledPageContainer>
  );
};

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Button, Stack, Tab } from '@mui/material';
import { JobTable, StyledHeader, StyledPageContainer } from 'components';
import { useBusinessConfig } from 'hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPaper } from './Jobs.styles';

export const Jobs: React.VFC = () => {
  const navigate = useNavigate();
  const { businessConfig } = useBusinessConfig();
  const [value, setValue] = useState(businessConfig.jobStatuses[0].apiStatus);

  const handleChange = (e: React.SyntheticEvent, newVal: string) =>
    setValue(newVal);

  return (
    <StyledPageContainer>
      <StyledHeader variant="h4">Jobs</StyledHeader>
      <Stack direction="row" spacing={1}>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate('/jobs/edit')}
        >
          New Job
        </Button>
        <Button size="small" variant="contained">
          Refresh Jobs
        </Button>
      </Stack>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          {businessConfig.jobStatuses.map((status) => (
            <Tab
              key={status.apiStatus}
              label={status.title}
              value={status.apiStatus}
            />
          ))}
        </TabList>
        <StyledPaper>
          {businessConfig.jobStatuses.map((status) => (
            <TabPanel key={status.apiStatus} value={status.apiStatus}>
              <JobTable
                apiStatus={status.apiStatus}
                visibleCols={status.defaultVisibleCols}
              />
            </TabPanel>
          ))}
        </StyledPaper>
      </TabContext>
    </StyledPageContainer>
  );
};

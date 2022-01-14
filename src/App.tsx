import { BusinessConfigProvider, ThemeProvider } from 'hooks';
import { DefaultLayout } from 'layouts';
import { Clients, JobEditor, Jobs, Overview } from 'pages';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

export const App: React.VFC = () => {
  return (
    <BusinessConfigProvider>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate to={'/overview'} />} />
            <Route
              path="/overview"
              element={
                <DefaultLayout>
                  <Overview />
                </DefaultLayout>
              }
            />
            <Route
              path="/jobs"
              element={
                <DefaultLayout>
                  <Jobs />
                </DefaultLayout>
              }
            />
            <Route
              path="/jobs/edit"
              element={
                <DefaultLayout>
                  <JobEditor />
                </DefaultLayout>
              }
            />
            <Route
              path="/jobs/edit/:jobID"
              element={
                <DefaultLayout>
                  <JobEditor />
                </DefaultLayout>
              }
            />
            <Route
              path="/jobs/edit/:jobID/external"
              element={<JobEditor backButton={false} />}
            />
            <Route
              path="/clients"
              element={
                <DefaultLayout>
                  <Clients />
                </DefaultLayout>
              }
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </BusinessConfigProvider>
  );
};

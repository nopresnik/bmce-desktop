import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import ActionBar from '../../../components/ActionBar';
import JobLists from '../../../components/JobLists/JobLists';
import JobNavBar from '../../../components/JobNavBar';

export const Jobs: React.VFC = () => {
  return (
    <Route path="/jobs">
      <ActionBar />
      <JobNavBar />
      <Route exact path="/">
        <Redirect to="/jobs" />
      </Route>
      <Route exact path="/jobs/">
        <JobLists.Active />
      </Route>
      <Route exact path="/jobs/hold">
        <JobLists.Hold />
      </Route>
      <Route exact path="/jobs/awaitinginvoicing">
        <JobLists.Invoicing />
      </Route>
      <Route exact path="/jobs/unpaid">
        <JobLists.Unpaid />
      </Route>
      <Route exact path="/jobs/completed">
        <JobLists.Completed />
      </Route>
    </Route>
  );
};

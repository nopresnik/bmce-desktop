import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route } from 'react-router';
import ActionBar from '../../components/ActionBar';
import JobLists from '../../components/JobLists/JobLists';
import JobNavBar from '../../components/JobNavBar';
import Sidebar from './Sidebar';

const Main: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={2} md={3} className="d-none d-md-block main-sidebar">
          <Sidebar />
        </Col>
        <Col xl={10} md={9} sm={12} className="vh-100 d-flex flex-column">
          <ActionBar />
          <JobNavBar />
          <Route exact path="/">
            <JobLists.Active />
          </Route>
          <Route exact path="/hold">
            <JobLists.Hold />
          </Route>
          <Route exact path="/awaitinginvoicing">
            <JobLists.Invoicing />
          </Route>
          <Route exact path="/unpaid">
            <JobLists.Unpaid />
          </Route>
          <Route exact path="/completed">
            <JobLists.Completed />
          </Route>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

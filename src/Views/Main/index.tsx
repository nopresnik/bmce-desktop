import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route } from 'react-router';
import ActionBar from '../../Components/ActionBar';
import ActiveList from '../../Components/JobLists/ActiveList';
import JobNavBar from '../../Components/JobNavBar';
import Sidebar from './Sidebar';

const Main: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={2} md={3} className="d-none d-md-block main-sidebar">
            <Sidebar />
          </Col>
          <Col xl={10} md={9} sm={12} className="vh-100 d-flex flex-column">
            <ActionBar />
            <JobNavBar />
            <Route exact path="/">
              <ActiveList />
            </Route>
            <Route exact path="/hold">
              <h1>Jobs on hold</h1>
            </Route>
            <Route exact path="/awaitinginvoicing">
              <h1>Jobs awaiting invoicing</h1>
            </Route>
            <Route exact path="/unpaid">
              <h1>Jobs unpaid</h1>
            </Route>
            <Route exact path="/completed">
              <h1>Jobs completed</h1>
            </Route>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;

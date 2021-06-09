import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import ActionBar from '../../Components/ActionBar';
import ActiveList from '../../Components/JobLists/ActiveList';
import Sidebar from './Sidebar';

const Main: React.FC<Record<string, never>> = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={2} md={3} className="d-none d-md-block main-sidebar">
            <Sidebar />
          </Col>
          <Col xl={10} md={9} sm={12} className="h-100">
            <ActionBar />
            <Tabs defaultActiveKey="active" className="mt-3">
              <Tab
                eventKey="active"
                title="In Progress"
                className="border-bottom border-left border-right p-2 bg-white"
              >
                <ActiveList />
              </Tab>
              <Tab
                eventKey="hold"
                title="On Hold"
                className="border-bottom border-left border-right p-2 bg-white"
              >
                {'On hold jobs list'}
              </Tab>
              <Tab
                eventKey="invoicing"
                title="Awaiting Invoicing"
                className="border-bottom border-left border-right p-2 bg-white"
              >
                {'Awaiting invoicing jobs list'}
              </Tab>
              <Tab
                eventKey="unpaid"
                title="Unpaid"
                className="border-bottom border-left border-right p-2 bg-white"
              >
                {'Unpaid jobs list'}
              </Tab>
              <Tab
                eventKey="completed"
                title="Completed"
                className="border-bottom border-left border-right p-2 bg-white"
              >
                {'Completed jobs list'}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;

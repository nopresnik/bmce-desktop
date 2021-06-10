import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
          <Col xl={10} md={9} sm={12} className="vh-100 d-flex flex-column">
            <ActionBar />
            <ActiveList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;

import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainWrapper } from '../../components';
import { Jobs } from './Jobs/Jobs';
import { Registers } from './Registers/Registers';
import Sidebar from './Sidebar';

const Main: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={2} md={3} className="d-none d-md-block main-sidebar">
          <Sidebar />
        </Col>
        <Col xl={10} md={9} sm={12} className="vh-100 d-flex flex-column">
          <MainWrapper>
            <Jobs />
            <Registers />
          </MainWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

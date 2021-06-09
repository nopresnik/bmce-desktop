import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import StatPill from '../../Components/StatPill';
import logo from '../../Images/logo.png';

const Sidebar: React.FC<Record<string, never>> = () => {
  return (
    <>
      <div className="logo-container pt-3">
        <img src={logo} className="logo" alt="company logo" />
      </div>

      <Card className="stats-list mt-3">
        <Card.Header>Jobs overview</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            In progress
            <StatPill variant="success" content={0} />
          </ListGroup.Item>
          <ListGroup.Item>
            On hold
            <StatPill variant="secondary" content={0} />
          </ListGroup.Item>
          <ListGroup.Item>
            Awaiting invoicing
            <StatPill variant="warning" content={0} />
          </ListGroup.Item>
          <ListGroup.Item>
            Unpaid invoices
            <StatPill variant="danger" content={0} />
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="stats-list mt-3">
        <Card.Header>Job counts</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Month (June)
            <StatPill variant="success" content={0} />
          </ListGroup.Item>
          <ListGroup.Item>
            Year (2021)
            <StatPill variant="secondary" content={0} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Sidebar;

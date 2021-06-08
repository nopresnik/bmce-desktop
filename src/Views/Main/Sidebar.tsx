import React from 'react';
import { Badge, Card, ListGroup } from 'react-bootstrap';
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
            <Badge pill variant="success">
              231
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            On hold
            <Badge pill variant="secondary">
              231
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            Awaiting invoicing
            <Badge pill variant="warning">
              231
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            Unpaid invoices
            <Badge pill variant="danger">
              231
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="stats-list mt-3">
        <Card.Header>Job counts</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Month (June)
            <Badge pill variant="success">
              758
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            Year (2021)
            <Badge pill variant="secondary">
              23158
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Sidebar;

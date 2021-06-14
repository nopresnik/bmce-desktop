import React from 'react';
import { Nav } from 'react-bootstrap';

const JobNavBar: React.FC<Record<string, never>> = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="#/" className="mt-1">
      <Nav.Item>
        <Nav.Link href="#/">In Progress</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/hold">On Hold</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/awaitinginvoicing">Awaiting Invoicing</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/unpaid">Unpaid</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/completed">Completed</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default JobNavBar;

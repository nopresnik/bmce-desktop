import React from 'react';
import { Nav } from 'react-bootstrap';

export const MainWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Nav className="mb0 pb0" variant="pills" defaultActiveKey="#/jobs">
        <Nav.Item>
          <Nav.Link href="#/jobs">Jobs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/registers">Registers</Nav.Link>
        </Nav.Item>
      </Nav>
      {children}
    </>
  );
};

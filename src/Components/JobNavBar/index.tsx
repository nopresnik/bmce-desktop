import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Api from '../../Api';
import StatPill from '../StatPill';

interface Stats {
  active: number;
  hold: number;
  awaitingInvoicing: number;
  unpaid: number;
  month: number;
  year: number;
}

const JobNavBar: React.FC<Record<string, never>> = () => {
  const [stats, setStats] = useState<Stats>();

  useEffect(() => {
    Api.getStats().then(({ data }) => setStats(data.data));
  }, []);

  return (
    <Nav variant="tabs" defaultActiveKey="#/" className="mt-1 job-nav-bar">
      <Nav.Item>
        <Nav.Link href="#/">
          Active
          <StatPill
            variant="secondary"
            content={(stats && stats.active) || 0}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/hold">
          On Hold
          <StatPill variant="secondary" content={(stats && stats.hold) || 0} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/awaitinginvoicing">
          Awaiting Invoicing
          <StatPill
            variant="secondary"
            content={(stats && stats.awaitingInvoicing) || 0}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/unpaid">
          Unpaid
          <StatPill
            variant="secondary"
            content={(stats && stats.unpaid) || 0}
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/completed">Completed</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default JobNavBar;

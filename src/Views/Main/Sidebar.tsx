import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Api from '../../Api';
import StatPill from '../../Components/StatPill';
import logo from '../../Images/bmlogo.png';

interface Stats {
  active: number;
  hold: number;
  awaitingInvoicing: number;
  unpaid: number;
  month: number;
  year: number;
}

const Sidebar: React.FC<Record<string, never>> = () => {
  const [stats, setStats] = useState<Stats>();

  useEffect(() => {
    Api.getStats().then(({ data }) => setStats(data.data));
  }, []);

  return (
    <>
      <div className="logo-container pt-3">
        <img src={logo} height="40" className="logo" alt="company logo" />
      </div>

      <Card className="stats-list mt-3">
        <Card.Header>Jobs overview</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            In progress
            <StatPill
              variant="success"
              content={(stats && stats.active) || 0}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            On hold
            <StatPill
              variant="secondary"
              content={(stats && stats.hold) || 0}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            Awaiting invoicing
            <StatPill
              variant="warning"
              content={(stats && stats.awaitingInvoicing) || 0}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            Unpaid invoices
            <StatPill variant="danger" content={(stats && stats.unpaid) || 0} />
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="stats-list mt-3">
        <Card.Header>Job counts</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Month (June)
            <StatPill variant="success" content={(stats && stats.month) || 0} />
          </ListGroup.Item>
          <ListGroup.Item>
            Year (2021)
            <StatPill
              variant="secondary"
              content={(stats && stats.year) || 0}
            />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Sidebar;

import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { getStats } from '../../api';
import StatPill from '../../components/StatPill';
import Pusher from '../../helpers/Pusher';
import logo from '../../Images/bmlogo.png';

interface Stats {
  active: number;
  hold: number;
  awaitingInvoicing: number;
  unpaid: number;
  month: number;
  year: number;
}

const Sidebar: React.FC = () => {
  const [stats, setStats] = useState<Stats>();

  const fetchData = () => {
    getStats().then(({ data }) => setStats(data.data));
  };

  useEffect(() => {
    fetchData();
    Pusher.getInstance()
      .getJobsChannel()
      .bind('update_job', () => {
        fetchData();
      });

    return () => {
      Pusher.getInstance().getJobsChannel().unbind_all();
    };
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
            Active
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
            Month ({new Date().toLocaleDateString('default', { month: 'long' })}
            )
            <StatPill variant="success" content={(stats && stats.month) || 0} />
          </ListGroup.Item>
          <ListGroup.Item>
            Year ({new Date().getFullYear()})
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
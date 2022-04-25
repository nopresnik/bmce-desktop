import React from 'react';
import { Nav } from 'react-bootstrap';

interface Stats {
  active: number;
  hold: number;
  awaitingInvoicing: number;
  unpaid: number;
  month: number;
  year: number;
}

const JobNavBar: React.FC = () => {
  // const [stats, setStats] = useState<Stats>();

  // useEffect(() => {
  //   Api.getStats().then(({ data }) => setStats(data.data));
  // }, []);

  return (
    <Nav variant="tabs" defaultActiveKey="#/jobs/" className="mt-1 job-nav-bar">
      <Nav.Item>
        <Nav.Link href="#/jobs/">
          Active
          {/* <StatPill
            variant="secondary"
            content={(stats && stats.active) || 0}
          /> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/jobs/hold">
          On Hold
          {/* <StatPill variant="secondary" content={(stats && stats.hold) || 0} /> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/jobs/awaitinginvoicing">
          Awaiting Invoicing
          {/* <StatPill
            variant="secondary"
            content={(stats && stats.awaitingInvoicing) || 0}
          /> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/jobs/unpaid">
          Unpaid
          {/* <StatPill
            variant="secondary"
            content={(stats && stats.unpaid) || 0}
          /> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/jobs/completed">Completed</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default JobNavBar;

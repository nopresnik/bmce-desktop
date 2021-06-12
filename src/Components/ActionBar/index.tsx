import React from 'react';
import { Button } from 'react-bootstrap';
import QuickView from './QuickView';
import './styles.scss';

const ActionBar: React.FC<Record<string, never>> = () => {
  return (
    <div className="action-bar mt-3">
      <QuickView />
      <Button variant="secondary">Advanced Search</Button>
      <div className="divider"></div>
      <Button
        variant="secondary"
        onClick={() => {
          window.open(
            `#/job/`,
            '_blank',
            `title=Create job,width=1080,height=720`
          );
        }}
      >
        Create Job
      </Button>
      <Button variant="secondary">Refresh</Button>
      <Button variant="secondary" className="mr-0">
        Client Book
      </Button>
    </div>
  );
};

export default ActionBar;

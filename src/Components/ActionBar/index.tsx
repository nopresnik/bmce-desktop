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
      <Button variant="secondary">Create Job</Button>
      <Button variant="secondary">Refresh Lists</Button>
      <Button variant="secondary" className="mr-0">
        Client Address Book
      </Button>
    </div>
  );
};

export default ActionBar;

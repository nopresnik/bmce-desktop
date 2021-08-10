import React from 'react';
import { Button } from 'react-bootstrap';
import QuickView from './QuickView';
import './styles.scss';

const ActionBar: React.FC<Record<string, never>> = () => {
  return (
    <div className="action-bar mt-3">
      <QuickView />
      <Button
        variant="secondary"
        onClick={() => {
          window.open(
            `#/search/`,
            JSON.stringify({
              title: `Advanced Search`,
              width: 1280,
              height: 720,
            })
          );
        }}
      >
        Advanced Search
      </Button>
      <div className="divider"></div>
      <Button
        variant="secondary"
        onClick={() => {
          window.open(
            `#/job/`,
            JSON.stringify({
              title: `Create Job`,
              width: 1080,
              height: 800,
            })
          );
        }}
      >
        Create Job
      </Button>
      <Button variant="secondary">Refresh</Button>
      <Button
        variant="secondary"
        className="mr-0"
        onClick={() => {
          window.open(
            `#/clients/`,
            JSON.stringify({
              title: `Client Book`,
              width: 720,
              height: 720,
            })
          );
        }}
      >
        Client Book
      </Button>
    </div>
  );
};

export default ActionBar;

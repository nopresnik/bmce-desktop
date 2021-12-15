import React from 'react';
import { Button } from 'react-bootstrap';
import QuickView from './QuickView';
import './styles.scss';

const ActionBar: React.FC = () => {
  return (
    <div className="action-bar mt-3">
      <QuickView />
      <Button
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
      <Button>Refresh</Button>
      <Button
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

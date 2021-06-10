import React from 'react';
import Main from './Views/Main';
import { HashRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Job from './Views/Job';

const App: React.FC<Record<string, never>> = () => {
  return (
    <Router>
      <Switch className="m-0 p-0">
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/job/">
          <Job />
        </Route>
        <Route exact path="/job/:jobID/">
          <Job />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

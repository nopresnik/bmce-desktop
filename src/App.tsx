import React from 'react';
import Main from './Views/Main';
import { HashRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

const App: React.FC<Record<string, never>> = () => {
  return (
    <Router>
      <Switch className="m-0 p-0">
        <Route exact path="/test">
          <h1>Hello from test route</h1>
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

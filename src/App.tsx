import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Job from './Views/Job';
import Main from './Views/Main';

const App: React.FC<Record<string, never>> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/*">
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

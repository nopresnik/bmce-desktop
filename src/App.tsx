import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ClientBook from './views/clientbook';
import Job from './views/job';
import Main from './views/main';
import Search from './views/search';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/search/">
          <Search />
        </Route>
        <Route exact path="/clients/">
          <ClientBook />
        </Route>
        <Route exact path="/job/">
          <Job />
        </Route>
        <Route exact path="/job/:jobID/">
          <Job />
        </Route>
        <Route exact path="/*">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

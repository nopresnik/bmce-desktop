import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ClientBook from './Views/ClientBook';
import Job from './Views/Job';
import Main from './Views/Main';
import Search from './Views/Search';

const App: React.FC<Record<string, never>> = () => {
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

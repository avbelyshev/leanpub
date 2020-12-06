import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from "../pages/Main";
import Book from "../pages/Book";
import NotFound from "../pages/NotFound";
import { bookPath, newBookPath } from "../../helpers/routes";
import NewBook from "../pages/NewBook";

const browserHistory = createBrowserHistory();

const App = (props) => {
  const history = props.history || browserHistory;

  return (
    <Router history={history}>
      <Switch>
        <Route component={Main} path='/' exact />
        <Route component={NewBook} path={newBookPath()} strict exact />
        <Route component={Book} path={bookPath()} strict exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

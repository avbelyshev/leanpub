import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "../pages/Main";
import Book from "../pages/Book";
import NotFound from "../pages/NotFound";
import { bookPath, newBookPath } from "../../helpers/routes";
import NewBook from "../pages/NewBook";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={NewBook} path={newBookPath()} strict exact />
          <Route component={Book} path={bookPath()} strict exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

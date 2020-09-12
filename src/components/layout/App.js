import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from "../pages/Main";
import Book from "../pages/Book";
import NotFound from "../pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={Book} path='/book/:id' strict exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

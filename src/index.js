import ReactDom from 'react-dom';
import React from 'react';

import App from "./components/layout/App";
import AuthContext from "./context/AuthContext";

import './index.css';

import books from './db/books.json';
import user from './db/user.json';

ReactDom.render(
  <AuthContext.Provider value={user}>
    <App books={books} />
  </AuthContext.Provider>,
  document.getElementById('root')
);

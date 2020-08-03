import ReactDom from 'react-dom';
import React from 'react';

import App from "./App";

import './index.css';

import books from './db/books.json';

ReactDom.render(
  <App books={books} />,
  document.getElementById('root')
);

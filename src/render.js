import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from "./components/layout/App";

const author = {
  'name': 'Andriy Burkov',
  'email': 'burkov@gmail.com',
  'avatar': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1475540/original/andriy.jpg?1546120595',
  'about': 'Andriy Burkov holds a PhD in Artificial Intelligence, he works as a senior data scientist and machine learning team leader at Gartner.'
};

const book = {
  'title': 'The Hundred-Page Machine Learning Book',
  'description': 'Everything you really need to know in Machine Learning in a hundred pages.',
  'pages': 100,
  'language': 'English',
  'progress': 50,
  'cover': 'https://d2sofvawe08yqg.cloudfront.net/theMLbook/hero?1549509109',
  'author': author,
  'minimum_price': 20,
  'suggested_price': 40,
  'collected_amount': 2000,
  'expected_amount': 4000
};

const render = () => ReactDomServer.renderToString(<App book={book} />);

export default render;

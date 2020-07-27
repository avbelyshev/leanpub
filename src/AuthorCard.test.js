import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from "./AuthorCard";

test('renders author in a card', () => {
  const author = {
    'name': 'Andriy Burkov',
    'email': 'burkov@gmail.com',
    'avatar': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1475540/original/andriy.jpg?1546120595',
    'about': 'Andriy Burkov holds a PhD in Artificial Intelligence, he works as a senior data scientist and machine learning team leader at Gartner.'
  };

  const { getByText } = render(<AuthorCard author={author} />);

  expect(getByText('Andriy Burkov')).toBeInTheDocument();
})

test('renders an empty author in a card', () => {
  const { getByText } = render(<AuthorCard />);

  expect(getByText('Empty author')).toBeInTheDocument();
});

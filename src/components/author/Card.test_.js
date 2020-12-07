import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from "./Card";

import books from './../../db/books.json';

test('renders author in a card', () => {
  const author = books.find(b => b.id === 1).authors[0];

  const { getByText } = render(<AuthorCard author={author} />);

  expect(getByText('Andriy Burkov')).toBeInTheDocument();
})

test('renders an empty author in a card', () => {
  const { getByText } = render(<AuthorCard />);

  expect(getByText('Empty author')).toBeInTheDocument();
});

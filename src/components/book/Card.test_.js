import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from "./Card";

import books from './../../db/books.json';

test('renders book in a card', () => {
  const book = books.find(b => b.id === 1);

  const { getByText } = render(<BookCard book={book} />);

  expect(getByText('The Hundred-Page Machine Learning Book')).toBeInTheDocument();
})

test('renders an empty book in a card', () => {
  const { getByText } = render(<BookCard />);

  expect(getByText('Empty book')).toBeInTheDocument();
});

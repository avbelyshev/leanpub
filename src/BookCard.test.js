import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from "./BookCard";

test('renders book in a card', () => {
  const book = {
    'title': 'The Hundred-Page Machine Learning Book',
    'description': 'Everything you really need to know in Machine Learning in a hundred pages.',
    'pages': 100,
    'language': 'English',
    'progress': 50,
    'cover': 'https://d2sofvawe08yqg.cloudfront.net/theMLbook/hero?1549509109',
    'minimum_price': 20,
    'suggested_price': 40,
    'collected_amount': 2000,
    'expected_amount': 4000
  };

  const { getByText } = render(<BookCard book={book} />);

  expect(getByText('The Hundred-Page Machine Learning Book')).toBeInTheDocument();
})

test('renders an empty book in a card', () => {
  const { getByText } = render(<BookCard />);

  expect(getByText('Empty book')).toBeInTheDocument();
});

import React from 'react';

import App from './App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { newBookPath } from '../../helpers/routes';

describe('Routing', () => {
  it('renders Main page correctly', () => {
    const result = render(<App />);
    const headerEl = result.getByText('Leanpub');

    expect(headerEl).toBeTruthy();
  });

  it('navigating to NewBook page and back to main page works correctly', () => {
    const history = createMemoryHistory();
    const result = render(<App history={history} />);

    const newBookLink = result.getByText('Add new book');
    userEvent.click(newBookLink);
    const headerEl = result.getByText('New book');
    expect(headerEl).toBeTruthy();
    expect(history.location.pathname).toBe(newBookPath());

    const mainPageLink = result.getByText('Leanpub');
    userEvent.click(mainPageLink);
    expect(history.location.pathname).toBe('/');
  });

  it('renders Not found page if route is uncorrect', () => {
    const history = createMemoryHistory();
    history.push('/uncorrect');
    const result = render(<App history={history} />);

    expect(result.getByText('Oops, Nothing was Found')).toBeTruthy();
  });
})

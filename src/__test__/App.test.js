import React from 'react';
import { render } from '@testing-library/react';
import store from '../Store';
import App from '../App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <App />,
      </Provider>,
    );
  });
});

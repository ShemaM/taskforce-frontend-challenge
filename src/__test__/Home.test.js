import React from 'react';
import { render } from '@testing-library/react';
import Home from '../screens/Covicalc';
import store from '../Store';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

describe('Home Page', () => {
  it('renders Home page', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });
});

import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  waitForDomChange,
} from '@testing-library/react';
import moxios from 'moxios';
import { Provider } from 'react-redux';

import { exchangeRates } from '../../../constants';
import ExchangeRateContainer from '../ExchangeRateContainer';
import store from '../../../store';

afterEach(cleanup);

describe('ExchangeRateContainer', () => {
  beforeAll(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch correctly', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { rates: exchangeRates },
      });
    });
    const { getByTestId, getByText, container } = render(
      <Provider store={store}>
        <ExchangeRateContainer />
      </Provider>
    );

    const fetchDataButton = getByTestId('fetch-data-button');
    fireEvent.click(fetchDataButton);

    const elem = getByText('Loading...');
    expect(elem.innerHTML).toBe(' Loading... ');

    await waitForDomChange();

    const tr = container.querySelectorAll('tr');
    expect(tr).toHaveLength(2);
  });
});

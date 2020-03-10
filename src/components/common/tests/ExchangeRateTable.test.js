import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { exchangeRates } from '../../../constants';
import ExchangeRateTable from '../ExchangeRateTable';

afterEach(cleanup);
describe('ExchangeRateTable Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <ExchangeRateTable exchangeRates={exchangeRates} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('to have 2 rates', async () => {
    const { container } = render(
      <ExchangeRateTable exchangeRates={exchangeRates} />
    );
    const tr = container.querySelectorAll('tr');
    expect(tr).toHaveLength(2);
  });
});

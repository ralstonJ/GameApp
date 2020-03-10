import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from '../../common/Loading';

afterEach(cleanup);

describe('Loading Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});

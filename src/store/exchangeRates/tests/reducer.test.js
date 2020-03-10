import { ERROR_MESSAGE, exchangeRates } from '../../../constants';
import {
  FETCH_DATA_COMPLETE,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
} from '../actionTypes';
import rootReducer, { initialState } from '../reducer';

const fireAction = (reducer, currentState, type, payload = {}) => {
  return reducer(currentState, {
    type,
    payload,
  });
};

let state = rootReducer(undefined, {});

describe('ExchangeRates reducer', () => {
  it('should match initial state', () => {
    expect(state).toEqual(initialState);
  });

  it('on FETCH_DATA_REQUEST', () => {
    state = fireAction(rootReducer, state, FETCH_DATA_REQUEST);
    expect(state.isLoading).toBe(true);
  });

  it('on FETCH_DATA_COMPLETE', () => {
    const payload = {
      exchangeRates,
      isLoading: false,
    };
    state = fireAction(rootReducer, state, FETCH_DATA_COMPLETE, payload);
    expect(state.exchangeRates).toEqual(exchangeRates);
    expect(state.isLoading).toBe(false);
  });

  it('on FETCH_DATA_ERROR', () => {
    const payload = {
      isError: true,
      errorMessage: ERROR_MESSAGE,
    };
    state = fireAction(rootReducer, state, FETCH_DATA_ERROR, payload);
    expect(state.isError).toEqual(true);
    expect(state.errorMessage).toEqual(ERROR_MESSAGE);
  });
});

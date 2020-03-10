import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ERROR_MESSAGE, exchangeRates } from '../../../constants';
import {
  fetchDataComplete,
  fetchDataError,
  fetchDataRequest,
} from '../actions';
import { FETCH_DATA_ERROR } from '../actionTypes';
import { fetchData } from '../operations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ExchangeRate Actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should return an error object when error', () => {
    const obj = fetchDataError(false, '');
    const exchangeRateErrorMessage = {
      type: FETCH_DATA_ERROR,
      payload: {
        isError: false,
        errorMessage: '',
      },
    };
    expect(obj).toEqual(exchangeRateErrorMessage);
  });

  it('should return request and complete when successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { rates: exchangeRates },
      });
    });
    const expectedActions = [
      fetchDataRequest(),
      fetchDataComplete(exchangeRates, false),
    ];

    const store = mockStore({});

    return store.dispatch(fetchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return request and error actions when error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });
    const expectedActions = [
      fetchDataRequest(),
      fetchDataError(true, ERROR_MESSAGE),
    ];

    const store = mockStore({});

    return store.dispatch(fetchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

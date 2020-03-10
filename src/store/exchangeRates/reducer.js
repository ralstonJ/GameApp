import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_COMPLETE,
  FETCH_DATA_ERROR,
} from './actionTypes';

export const initialState = {
  isLoading: false,
  exchangeRates: {},
  isError: false,
  errorMessage: '',
};

const exchangeRates = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_COMPLETE:
      const { exchangeRates, isLoading } = action.payload;
      return {
        ...state,
        exchangeRates: exchangeRates || {},
        isLoading,
      };
    case FETCH_DATA_ERROR:
      const { isError, errorMessage } = action.payload;
      return {
        ...state,
        isError,
        errorMessage,
        exchangeRates: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default exchangeRates;

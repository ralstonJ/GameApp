import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_COMPLETE,
  FETCH_DATA_ERROR,
} from './actionTypes';

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });

export const fetchDataComplete = (exchangeRates, isLoading) => ({
  type: FETCH_DATA_COMPLETE,
  payload: { exchangeRates, isLoading },
});

export const fetchDataError = (isError, errorMessage) => ({
  type: FETCH_DATA_ERROR,
  payload: { isError, errorMessage },
});

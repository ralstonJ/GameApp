import axios from 'axios';
import { ERROR_MESSAGE } from '../../constants';
import * as endpoints from '../../constants/endpoints';
import { fetchDataComplete, fetchDataError, fetchDataRequest } from './actions';

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataRequest());
    return axios
      .get(endpoints.LATEST_EXCHANGE_RATES)
      .then(res => {
        dispatch(fetchDataComplete(res.data.rates, false));
      })
      .catch(err => {
        dispatch(fetchDataError(true, ERROR_MESSAGE));
      });
  };
};

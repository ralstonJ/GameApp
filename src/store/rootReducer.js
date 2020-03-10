import { combineReducers } from 'redux';
import rates from './exchangeRates/reducer';

const rootReducer = combineReducers({
  rates,
});

export default rootReducer;

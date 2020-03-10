import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ExchangeRates from './components/exchangeRates/ExchangeRateContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ExchangeRates />
    </Provider>
  );
}

export default App;

import React from 'react';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorModal';
import ExchangeRateTable from '../common/ExchangeRateTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/exchangeRates/operations';
import { fetchDataError } from '../../store/exchangeRates/actions';

const ExchangeRate = () => {
  const {
    rates: { exchangeRates, isLoading, isError, errorMessage },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  const handleOnClose = () => {
    dispatch(fetchDataError(false, ''));
  };

  return (
    <div>
      <button data-testid="fetch-data-button" onClick={handleFetchData}>
        Fetch data
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <ExchangeRateTable exchangeRates={exchangeRates} />
      )}
      <ErrorMessage
        showModal={isError}
        message={errorMessage}
        onClose={handleOnClose}
      />
    </div>
  );
};

export default ExchangeRate;

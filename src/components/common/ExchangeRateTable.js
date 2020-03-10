import React from 'react';

const renderRates = exchangeRates =>
  Object.keys(exchangeRates).map((data, i) => {
    return (
      <tr key={i}>
        <td>{data}</td>
        <td> {exchangeRates[data]}</td>
      </tr>
    );
  });
const ExchangeRateTable = ({ exchangeRates }) => {
  return (
    <div>
      <table>
        <tbody>{renderRates(exchangeRates)}</tbody>
      </table>
    </div>
  );
};

export default ExchangeRateTable;

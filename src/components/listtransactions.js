import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TRANSACTIONS_BY_COMPTE } from '../apollo/queries';
import '../App.css';

const Listtransaction = ({ compteId }) => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS_BY_COMPTE, {
    variables: { id: compteId },
  });

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="Liste des transactions">
      <h3>Transactions</h3>
      <ul>
        {data.compteTransactions.map((transaction) => (
          <li key={transaction.id}>
            <strong>{transaction.type}:</strong> {transaction.montant}€ on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listtransaction;

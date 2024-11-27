import React from 'react';
import '../styles/cartecompte.css';

const Cartecompte = ({ compte }) => {
  return (
    <div className="card">
      <h3>Account ID: {compte.id}</h3>
      <p><strong>Type:</strong> {compte.type}</p>
      <p><strong>Balance:</strong> {compte.solde} €</p>
      <p><strong>Created On:</strong> {compte.dateCreation}</p>
      <h4>Transactions:</h4>
      <ul>
        {compte.transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: {transaction.montant} € on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cartecompte;

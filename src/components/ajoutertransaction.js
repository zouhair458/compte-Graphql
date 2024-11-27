import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRANSACTION, GET_TRANSACTIONS_BY_COMPTE } from '../apollo/queries';
import '../styles/ajoutertransaction.css';

const Ajoutertransaction = ({ compteId }) => {
  const [montant, setMontant] = useState('');
  const [type, setType] = useState('');

  const [ajouterransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [{ query: GET_TRANSACTIONS_BY_COMPTE, variables: { id: compteId } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterransaction({ variables: { montant: parseFloat(montant), type, compteId } });
    setMontant('');
    setType('');
  };

  return (
    <form className="add-transaction-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Add Transaction</h3>
      <div className="form-group">
        <label htmlFor="montant">Amount:</label>
        <input
          id="montant"
          type="number"
          placeholder="Enter amount"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Transaction Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="" disabled>Select transaction type</option>
          <option value="DEPOT">Deposit</option>
          <option value="RETRAIT">Withdrawal</option>
        </select>
      </div>
      <button className="submit-button" type="submit">Add Transaction</button>
    </form>
  );
};

export default Ajoutertransaction;

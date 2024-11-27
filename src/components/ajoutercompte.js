import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMPTE, GET_COMPTES } from '../apollo/queries';
import '../styles/ajoutercompte.css';

const Ajoutercompte = () => {
  const [solde, setSolde] = useState('');
  const [dateCreation, setDateCreation] = useState('');
  const [type, setType] = useState('');

  const [saveCompte] = useMutation(ADD_COMPTE, {
    refetchQueries: [{ query: GET_COMPTES }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCompte({ variables: { solde: parseFloat(solde), dateCreation, type } });
    setSolde('');
    setDateCreation('');
    setType('');
  };

  return (
    <form className="add-compte-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Add New Account</h3>
      <div className="form-group">
        <label htmlFor="solde">Balance:</label>
        <input
          id="solde"
          type="number"
          placeholder="Enter balance"
          value={solde}
          onChange={(e) => setSolde(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateCreation">Creation Date:</label>
        <input
          id="dateCreation"
          type="date"
          value={dateCreation}
          onChange={(e) => setDateCreation(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Account Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="" disabled>Select account type</option>
          <option value="COURANT">Courant</option>
          <option value="EPARGNE">Epargne</option>
        </select>
      </div>
      <button className="submit-button" type="submit">Add Account</button>
    </form>
  );
};

export default Ajoutercompte;

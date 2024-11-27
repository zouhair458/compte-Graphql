import React from 'react';
import { useQuery } from '@apollo/client';
import { TOTAL_SOLDE_STATS, TRANSACTION_STATS } from '../apollo/queries';
import './App.css';

const Statistiques = () => {
  const { data: soldeData, loading: soldeLoading, error: soldeError } = useQuery(TOTAL_SOLDE_STATS);
  const { data: transactionData, loading: transactionLoading, error: transactionError } = useQuery(TRANSACTION_STATS);

  // Check if either of the queries is loading
  if (soldeLoading || transactionLoading) return <p className="loading">Loading statistics...</p>;

  // Check if there are errors
  if (soldeError || transactionError) return <p className="error">Error loading statistics: {soldeError?.message || transactionError?.message}</p>;

  return (
    <div className="statistics-container">
      <h3 className="statistics-title">Account Statistics</h3>
      <div className="statistics-grid">
        <div className="stat-card">
          <h4>Total Accounts</h4>
          <p>{soldeData?.totalSolde?.count || 0}</p>
        </div>
        <div className="stat-card">
          <h4>Total Balance</h4>
          <p>{soldeData?.totalSolde?.sum || 0}€</p>
        </div>
        <div className="stat-card">
          <h4>Average Balance</h4>
          <p>{soldeData?.totalSolde?.average || 0}€</p>
        </div>
        <div className="stat-card">
          <h4>Total Deposits</h4>
          <p>{transactionData?.transactionStats?.sumDepots || 0}€</p>
        </div>
        <div className="stat-card">
          <h4>Total Withdrawals</h4>
          <p>{transactionData?.transactionStats?.sumRetraits || 0}€</p>
        </div>
      </div>
    </div>
  );
};

export default Statistiques;

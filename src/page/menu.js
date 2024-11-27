import React, { useState } from 'react';
import Ajoutercompte from '../components/ajoutercompte';
import Listcompte from '../components/listcompte';
import Listtransaction from '../components/listtransactions';
import Ajoutertransaction from '../components/ajoutertransaction';
import '../App.css';

const Home = () => {
  const [selectedCompteId, setSelectedCompteId] = useState(null);

  return (
    <div className="home">
      <h1>Account Management</h1>
      <Ajoutercompte />
      <Listcompte onSelectCompte={(id) => setSelectedCompteId(id)} />
      {selectedCompteId && (
        <>
          <h2>Transactions for Account ID: {selectedCompteId}</h2>
          <Ajoutertransaction compteId={selectedCompteId} />
          <Listtransaction compteId={selectedCompteId} />
        </>
      )}
    </div>
  );
};

export default Home;
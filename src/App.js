import React from 'react';
import './App.css';
import Header from './components/Header';
import AccountInfo from './components/accountinfo.js';
import History from './components/History';
import Transaction from './components/Transaction.js';
import {GlobalProvider} from './context/contextTrans';

function App() {
  return (
    <div className="outer-container">
        <Header />
        <GlobalProvider>
      <div className="inner-container">  
        <AccountInfo />
        <History />
        <Transaction />
      </div> 
      </GlobalProvider>
    </div>
  );
}

export default App;

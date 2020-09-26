
import React, {useContext} from 'react';
import {TransactionItem} from './TransactionItem';
import {GlobalContext} from '../context/contextTrans';


function History(){

    const { transactions } = useContext(GlobalContext);

    return(
        <div className="appcomp">
        <h2 className='history'>Expenses</h2>
    <ul className='transactionlist'>
      {
          transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />   
          ))
      } 
    </ul>
        </div>
    );
}

export default History;
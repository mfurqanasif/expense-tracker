import React, {useContext} from 'react';
import {GlobalContext} from '../context/contextTrans';

function AccountInfo(){

    const {transactions} = useContext(GlobalContext);

    //firstly we will extract all transaction amounts
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    //the the the list of transaction will be sumed up
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(1);
    
    //now for total expense and income we have to filter out transaction on bases of type -/+ 
    //as we already separated out all the amounts in transactionAmounts 
    
    const income = transactionAmounts.filter(transaction => transaction > 0)
          .reduce((acc, transaction) => (acc += transaction), 0).toFixed(1);

    const expense = Math.abs(transactionAmounts.filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(1);



    return(
        <div className='appcomp'>
            <div className = "balance">
                <h3 className="heading">
                Balance
                </h3>
                <h1 className="heading">
                    ${balance}
                </h1>
            </div>
            <div className="income-expense">    
                <div className="income">    
                    <h3 className="heading">
                        Income
                    </h3>
                    <h1 className="heading">
                        +${income}
                    </h1>
                </div>
                <div className="expense">
                    <h3 className="heading">
                        Expense
                    </h3>
                    <h1 className="heading">
                        -${expense}
                    </h1>
                </div>
            </div>    
    </div>
  
    );
}

export default AccountInfo;
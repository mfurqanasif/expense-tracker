import React from 'react';

function AccountInfo(){

    return(
        <div className='appcomp'>
            <div className = "balance">
                <h3 className="heading">
                Balance
                </h3>
                <h1 className="heading">
                    $0.0
                </h1>
            </div>
            <div className="income-expense">    
                <div className="income">    
                    <h3 className="heading">
                        Income
                    </h3>
                    <h1 className="heading">
                        +$0.0
                    </h1>
                </div>
                <div className="expense">
                    <h3 className="heading">
                        Expense
                    </h3>
                    <h1 className="heading">
                        -$0.0
                    </h1>
                </div>
            </div>    
    </div>
  
    );
}

export default AccountInfo;
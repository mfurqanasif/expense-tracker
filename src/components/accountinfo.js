import React from 'react';

function AccountInfo(){

    return(
        <div className='subcontainer'>
            <div>
                <h3>
                Balance
                </h3>
                <h1>
                    $500
                </h1>
            </div>
            <div className="container">    
                <div>    
                    <h3>
                        Income
                    </h3>
                    <h1>
                        $700
                    </h1>
                </div>
                <div>
                    
                    <h3>
                        Expense
                    </h3>
                    <h1>
                        $200
                    </h1>
                </div>
            </div>    
    </div>
  
    );
}

export default AccountInfo;
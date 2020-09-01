import React from 'react';

function Transaction(){

    return(
        <div className="subcontainer" >
            <br/>
        <h1 className='sm'>Add Transaction</h1>
        <form action="">
       <label for="">Description</label>
       <br />
       <input type="text" placeholder="enter description" required/>
       <br /><br />
       <label for="">Amount</label>
       <br />
       <input type="number" placeholder="enter amount" required />
       <br /><br />

   </form>
    <button> Add Transaction</button>    
        </div>
    );
}

export default Transaction;
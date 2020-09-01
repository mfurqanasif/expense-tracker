import React from 'react';

function Transaction(){

    return(
        <div className="appcomp" >
        <h2 className='transaction'>Add Transaction</h2>
        <button className= 'incbtn'> Income </button> 
        <button className= 'expbtn'> Expense</button>
        <p id="para">Select the Transaction Type.</p> 
        <form className="transactionform" action="">
            <label >Description</label>
            <br />
            <input type="text" placeholder="enter description" required/>
            <br />
            <label >Amount</label>
            <br />
            <input type="number" placeholder="enter amount" required />
            <br />

        </form>
        <button className= 'addbtn'> Add Transaction</button>    
        </div>
    );
}

export default Transaction;
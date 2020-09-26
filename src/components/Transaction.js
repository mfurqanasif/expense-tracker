import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/contextTrans';

function Transaction(){

    //create 2 use state for desc and amount

    const [description , setDescription] = useState('');
    const [ transactionAmount , setTransactionAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id : new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }



    return(
        <div className="appcomp" >
        <h2 className='transaction'>Add Transaction</h2>

        <form className="transactionform" onSubmit={onSubmit} >
            <label >Description</label>
            <br />
            <input type="text" 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detail of Transaction" 
                    required="required"/>
            <br />
            <label >Amount</label>
            <br />
            <input type="number" 
                    id="transactionamount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    placeholder="Value of Transaction"
                    required="required" />
            <p id="para">Please add +/- sign.</p> 
            <br />
            <button className= 'addbtn'> Add Transaction</button>  
        </form>
       
        </div>
    );
}

export default Transaction;
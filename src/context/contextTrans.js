//first we will import and createContext from react
import React, {createContext , useReducer} from 'react';

//importing my reducer 
import reduceTrans from '../reducer/reduceTrans';

//this is our global state which will have all the transactions
//this is our initial state which is empty initially
const initialState = {
    transactions: []
}

//now thid is the global variable sate

export const GlobalContext =  createContext(initialState);

export const GlobalProvider = ({ children }) => {

    //making use of useReducer hook and in this i have send my reducer and initialstate
    const [state ,dispatch] = useReducer(reduceTrans,initialState);

    //now create del and add function 
    function delTransaction (id) {
        dispatch({type: 'delete-transaction', payload: id});
    }

    function addTransaction(transaction){
        dispatch({ type: 'add-transaction', payload: transaction});
    }


    //creating return of globalprovider 

    return (
        <GlobalContext.Provider value = {
           { transactions: state.transactions,
             delTransaction,
             addTransaction
           
            } 
        }>
           {children}
        </GlobalContext.Provider>

    );
} //end of globalprovider


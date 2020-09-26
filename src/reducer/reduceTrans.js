//here i am making a reducer or we can say that creating a action choice

export default (state, action) => {

    switch (action.type) {

        case 'delete-transaction':
            return{
                ...state, transactions: state.transactions
                .filter(transactions => transactions.id !== action.payload)
            }

        case 'add-transaction' :
            return{
                //from here we rturning a state and transation list of payload old trsantions
                ...state, transactions: [action.payload, ...state.transactions]
            }
        
        default:
            return state;
    };
}
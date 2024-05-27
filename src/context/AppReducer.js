export default (state, action) => {
	switch(action.type) {
	  case 'DELETE_TRANSACTION':
		return {
		  ...state,
		  transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
		}
	  case 'ADD_TRANSACTION':
		return {
		  ...state,
		  transactions: [action.payload, ...state.transactions]
		}
	  default:
		return state;
	}
  }


const reducer = (state, action) => {
	switch(action.type) {
	  case 'DELETE_TRANSACTION':
		return {
		  ...state,
		  transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
		}
	  case 'ADD_TRANSACTION':
		return {
		  ...state,
		  transactions: [action.payload, ...state.transactions]
		}
	  default:
		return state;
	}
  }
  
  // Example usage of the reducer function
  const initialState = { transactions: [] };
  const action = { type: 'ADD_TRANSACTION', payload: { id: 1, amount: 100 } };
  const nextState = reducer(initialState, action);
  
  console.log(nextState);
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionText, setTransactionText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      date: transactionDate,
      text: transactionText,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="date" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="text">Transaction Text</label>
          <input type="text" value={transactionText} onChange={(e) => setTransactionText(e.target.value)} placeholder="Enter transaction text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
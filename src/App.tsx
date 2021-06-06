import React, { useState } from 'react';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense'
import logo from './logo.svg';
import './App.css';

const initial_expence = [
  { date: new Date(2012, 2, 30), title: 'Car interface', amount: 123423 },
  { date: new Date(2012, 4, 22), title: 'Bus Interface', amount: 231234 },
];

function App() {
  const [expense, setExpense] = useState(initial_expence);


  const addExpenseHandeler = (expense:any) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandeler} />
      <Expense items={expense} />
    </div>
    
  );
}

export default App;

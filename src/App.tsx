import React from 'react';
import Expense from './components/Expense'
import logo from './logo.svg';
import './App.css';

function App() {
  const expence = [
    { date: new Date(2012, 2, 30), title: 'Car interface', amount: 123423 },
    { date: new Date(2012, 4, 22), title: 'Bus Interface', amount: 231234 },
  ];
  return (
    <Expense data={expence} />
  );
}

export default App;

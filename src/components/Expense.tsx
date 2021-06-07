import React, { useState } from 'react';  
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

function Expense(props: any) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear:any) => {
    setFilteredYear(selectedYear);
  };

    return (
        <div className="App">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.items.map((expence:any) => (
            <ExpenseItem
                key={expence.id}
                date={expence.date}
                title={expence.title}
                cost={expence.amount}
            />))}           
        </div>
    );
}


export default Expense;
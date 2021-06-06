import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props:any) => {
        const saveExpensedataHandeler = (entiredExpensedata:any) => {
          const expenceData ={
           ...entiredExpensedata,
           id: Math.random().toString()
          };
          //console.log(expenceData);
          props.onAddExpense(expenceData);
        };

        return <div>
                <ExpenseForm onSaveExpensedata={saveExpensedataHandeler} />
        </div>
}

export default NewExpense;

import React, { useState } from 'react';  

const ExpenseForm = (props:any) => {
    const [entiredTitle, setentiredTitle] = useState('');
    const [entiredAmount, setentiredAmount] = useState('');
    const [entiredDate, setentiredDate] = useState('');

    const titleChangeHandeler = (event:any) => {
        setentiredTitle(event.target.value);
        //console.log(event.target.value);
        // setentiredTitle({
        //     ...userInput,
        //     entiredTitle:  event.target.value,
        // });
        // setentiredTitle((PreviousState) => {
        //     return { ...PreviousState ,entiredTitle:  event.target.value,};
        // });
    };

    const amountChangeHandeler = (event:any) => {
        setentiredAmount(event.target.value);
        //console.log(event.target.value);
    };
    const dateChangeHandeler = (event:any) => {
        setentiredDate(event.target.value);
        //console.log(event.target.value);
    };

    const submitHandeler =(event:any) => {
        event.preventDefault();

        const expenseData = {
            title : entiredTitle,
            amount : entiredAmount,
            date : new Date(entiredDate)
        }

        props.onSaveExpensedata(expenseData);
        setentiredTitle('');
        setentiredAmount('');
        setentiredDate('');

    };

    return <form onSubmit={submitHandeler}>
        <div className="inputform">
            <label>Title</label>
            <input type="text"
             onChange={titleChangeHandeler} 
             value={entiredTitle}
            />
            <br />
            <label>Amount</label>
            <input 
                type="number" 
                min="0.01" 
                step="0.01" 
                onChange={amountChangeHandeler}  
                value={entiredAmount}
            />
            <br />
            <label>Title</label>
            <input 
                type="date" 
                min="2019-01-01" 
                max="2028-12-31" 
                onChange={dateChangeHandeler} 
                value={entiredDate} 
            />
            <br />
            <button type="submit">Submit</button>
        </div>
    </form>
}

export default ExpenseForm;
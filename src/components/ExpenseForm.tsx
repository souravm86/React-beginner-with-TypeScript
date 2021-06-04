import React from 'react'; 

const ExpenseForm = () => {

    return <form>
        <div className="inputform">
            <label>Title</label>
            <input type="text" />
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
            <label>Title</label>
            <input type="date" min="2019-01-01" max="2028-12-31" />

        </div>
    </form>
}

export default ExpenseForm;
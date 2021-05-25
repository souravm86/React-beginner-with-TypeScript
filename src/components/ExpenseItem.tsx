import React, { useState } from 'react';  
import ExpenceData from './ExpenseDate'
import './ExpenseItem.css';

function ExpenseItem(props: any) {
    const [title, settitle] = useState(props.title);

    const changeclicked = () =>{
        settitle('Updated');        
    }

    return <div className="expence-item">
        <ExpenceData date={props.date} />
        <div className="item-row">
            <div>{props.title}</div>
            <div>{props.cost}</div>
            <div>
                <button onClick={() => changeclicked()}>Change</button>
            </div>
        </div>
    </div>

}

export default ExpenseItem;
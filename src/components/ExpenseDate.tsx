import './ExpenseItem.css'; 

const ExpenseDate = (props : any) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const date = props.date.toLocaleString('en-US', {day: '2-digit'});

    return <div className="Expdate"> 
            <div>{date}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>;
}

export default ExpenseDate;
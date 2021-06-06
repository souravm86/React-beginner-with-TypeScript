import ExpenseItem from './ExpenseItem'
function Expense(props: any) {

    return (
        <div className="App">
            {props.items.map((expence:any) => (<ExpenseItem
                date={expence.date}
                title={expence.title}
                cost={expence.amount}
            />))}           
        </div>
    );
}


export default Expense;
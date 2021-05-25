import ExpenseItem from './ExpenseItem'
function Expense(props: any) {

    return (
        <div className="App">
            <ExpenseItem
                date={props.data[0].date}
                title={props.data[0].title}
                cost={props.data[0].amount}
            />
            <ExpenseItem
                date={props.data[1].date}
                title={props.data[1].title}
                cost={props.data[1].amount}
            />
        </div>
    );
}


export default Expense;
import './ExpenseItem.css';

function ExpenseItem(props){
    return (<div className='parent-div'>
            <div className='expense-date'>{props.date.toDateString()}</div>
                <div className='expense-name'>
                    <h2>{props.title}</h2>
                </div>
                <div className='expense-amount'>${props.amount}</div>
        </div>);
}

export default ExpenseItem;
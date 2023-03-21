import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022 ,1, 27);
    const expenseName='Car Insurance';
    const expenseAmount=500;
    return (<div className='parent-div'>
            <div className='expense-date'>{expenseDate.toDateString()}</div>
                <div className='expense-name'>
                    <h2>{expenseName}</h2>
                </div>
                <div className='expense-amount'>${expenseAmount}</div>
        </div>);
}

export default ExpenseItem;
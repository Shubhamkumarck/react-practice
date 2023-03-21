import './ExpenseItem.css';

function ExpenseItem(){
    return (<div className='parent-div'>
            <div className='expense-date'>2022-01-27</div>
                <div className='expense-name'>
                    <h2>
                        Car Insurance
                    </h2>
                </div>
                <div className='expense-amount'>$500</div>
        </div>);
}

export default ExpenseItem;
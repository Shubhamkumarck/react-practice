import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses=[
    { title: 'Car Insurance 1', amount: 279.11, date : new Date(2021,2,11)},
    { title: 'Car Insurance 2', amount: 299.11, date : new Date(2025,2,11)},
    { title: 'Car Insurance 3', amount: 259.11, date : new Date(2023,2,11)},
    { title: 'Car Insurance 3', amount: 259.11, date : new Date(2023,2,11)}
  ];
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

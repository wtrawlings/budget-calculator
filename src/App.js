import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "Car Payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];

function App() {
  console.log(useState());
  const [expenses, setExpenses] = useState(initialExpenses); //array destructuring
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;

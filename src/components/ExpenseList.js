import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
//the main background isn't there. It's not white over grey
//there should be a white zone around all the list itmes and
//I expect a missing className in a div here?
const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          clear expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;

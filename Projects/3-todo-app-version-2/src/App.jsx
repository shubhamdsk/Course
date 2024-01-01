import React from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

const App = () => {
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "23/12/2023",
    },
    {
      name: "Go to College",
      dueDate: "23/12/2023",
    },
    {
      name: "Complete the Course",
      dueDate: "13/1/2024",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems Todoitems={todoItem} />
      </center>
    </>
  );
};

export default App;

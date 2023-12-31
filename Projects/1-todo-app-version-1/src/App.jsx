import React from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";

const App = () => {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="todo-items">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </>
  );
};

export default App;

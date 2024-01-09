import React from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

const App = () => {
  const [todoItem, setTodoItem] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added ${itemName} Date : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItem,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItems);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItem.length === 0 && <WelcomeMessage />}
        <TodoItems Todoitems={todoItem} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
};

export default App;

import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ Todoitems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {Todoitems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;

import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ Todoitems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {Todoitems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;

import React, { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div>
      <div className="container text-center">
        <div className="row dsk-row">
          <div className="col-5">
            <input
              type="text"
              placeholder="Enter ToDo Here"
              onChange={handleNameChange}
              value={todoName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name="date"
              onChange={handleDateChange}
              value={dueDate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success dsk-button"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

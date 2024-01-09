import React from "react";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div>
      <div className="container">
        <div className="row dsk-row">
          <div className="col-5">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger dsk-button"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

import React from "react";

const TodoItem1 = () => {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";
  return (
    <div>
      <div className="container">
        <div className="row dsk-row">
          <div className="col-5">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger dsk-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;

import React from "react";

const AddTodo = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row dsk-row">
          <div className="col-5">
            <input type="text" placeholder="Enter ToDo Here" />
          </div>
          <div className="col-4">
            <input type="date" name="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success dsk-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

import React from "react";

const Items = (props) => {
  // Array Destructuring
  let { fooditems } = props;
  return (
    <div>
      <li className="list-group-item">{fooditems}</li>
    </div>
  );
};

export default Items;

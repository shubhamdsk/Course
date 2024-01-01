import React from "react";

const ErrorMessage = (props) => {
  let { items } = props;
  
  // Condiitional Rendering

  // // 1 - If-Else
  // if (FoodItems.length === 0) {
  //   <h2>I am Still Hungry</h2>;
  // }

  // // 2 - Ternary Operator
  // let EmptyMessage =
  //   FoodItems.length === 0 ? <h2>"I'm still Hungry"</h2> : null;
  return (
    <div>
      {/* 3 - Logical operators */}
      {items.length === 0 && <h4>I'm Still Hungry</h4>}
    </div>
  );
};

export default ErrorMessage;

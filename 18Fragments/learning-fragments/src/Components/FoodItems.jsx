import React from "react";

const FoodItems = () => {
  let FoodItems = ["Dal", "Milk", "Salad", "Veg", "Fruits"];
  return (
    <div>
      {/* Map Method */}
      <ul className="list-group">
        {/* 3 - Logical operators */}
        {FoodItems.length === 0 && <h4>I'm Still Hungry</h4>}
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green vegetables</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
        <li className="list-group-item">Eggs</li> */}
      </ul>
    </div>
  );
};

export default FoodItems;

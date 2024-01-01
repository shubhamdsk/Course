import React from "react";
import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <div>
      {/* Map Method */}
      <ul className="list-group">
        {items.map((item) => (
          <Items key={item} fooditems={item} />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;

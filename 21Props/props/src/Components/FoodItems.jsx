import React, { useState } from "react";
import Items from "./Items";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, evet) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <div>
      {/* Map Method */}
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            fooditems={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;

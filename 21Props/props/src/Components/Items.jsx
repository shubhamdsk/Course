import React from "react";
import styles from "./Items.module.css";
const Items = (props) => {
  // Array Destructuring
  let { fooditems } = props;
  return (
    <div>
      <li className={`${styles["dsk-item"]} list-group-item`}>
        <span className={styles["dsk-span"]}>{fooditems}</span>
      </li>
    </div>
  );
};

export default Items;

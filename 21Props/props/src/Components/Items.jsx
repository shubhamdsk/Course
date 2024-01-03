import React from "react";
import styles from "./Items.module.css";
const Items = ({ fooditems, handleBuyButton }) => {
  return (
    <div>
      <li className={`${styles["dsk-item"]} list-group-item`}>
        <span className={styles["dsk-span"]}>{fooditems}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </div>
  );
};

export default Items;

import React from "react";
import styles from "./Items.module.css";
const Items = ({ fooditems, bought, handleBuyButton }) => {
  return (
    <div>
      <li
        className={`${styles["dsk-item"]} list-group-item ${
          bought && "active"
        } `}
      >
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

import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={styles.foodinput}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

export default FoodInput;

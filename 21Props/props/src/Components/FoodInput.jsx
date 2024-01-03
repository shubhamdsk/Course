import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={styles.foodinput}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default FoodInput;

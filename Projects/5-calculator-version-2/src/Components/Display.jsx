import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayvalue }) => {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        value={displayvalue}
        readOnly
      />
    </div>
  );
};

export default Display;

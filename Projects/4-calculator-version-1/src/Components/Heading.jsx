import React from "react";
import styles from "./Heading.module.css";

const Heading = (props) => {
  let { title } = props;
  return (
    <div>
      <h2 className={styles.heading}>{title}</h2>
    </div>
  );
};

export default Heading;

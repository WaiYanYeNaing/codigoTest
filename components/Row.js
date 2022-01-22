import React from "react";
import styles from "../styles/Row.module.css";

const Row = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      {props.children}
    </div>
  );
};

export default Row;

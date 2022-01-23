import React from "react";
import styles from "../styles/TextB.module.css";

const TextB = (props) => {
  return (
    <div className={styles.text} style={props.style}>
      {props.children}
    </div>
  );
};

export default TextB;

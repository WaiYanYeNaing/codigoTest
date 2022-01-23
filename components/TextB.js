import React from "react";
import styles from "../styles/TextB.module.css";

const TextB = ({ children, style }) => {
  return (
    <div className={styles.text} style={style}>
      {children}
    </div>
  );
};

export default TextB;

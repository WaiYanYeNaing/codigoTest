import React from "react";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Here’s 5% of </p>
        <p className={styles.title}>our published work. </p>
        <p className={styles.title} style={{ color: "#d5333e" }}>
          See 100% of our power.
        </p>
      </div>
    </>
  );
};

export default Title;

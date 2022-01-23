import React from "react";
import NavBar from "../components/NavBar";
import OcbcDetails from "../components/OcbcPage/OcbcDetails";
import styles from "../styles/ocbc-pay-anyone.module.css";

const ocbcPayAnyone = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <OcbcDetails />
    </div>
  );
};

export default ocbcPayAnyone;

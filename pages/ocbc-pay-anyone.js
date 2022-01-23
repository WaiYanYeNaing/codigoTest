import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import OcbcDetails from "../components/OcbcPage/OcbcDetails";
import styles from "../styles/ocbc-pay-anyone.module.css";

const ocbcPayAnyone = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <OcbcDetails />
      </Layout>
    </div>
  );
};

export default ocbcPayAnyone;

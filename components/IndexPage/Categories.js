import React from "react";
import { Column } from "../Column";
import Row from "../Row";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <div className={styles.container}>
        <Row>
          <Column span={9}>
            <Row style={{ margin: "20px 0" }}>
              <Column span={4}>
                <div className={styles.category_name}>All</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Food & Beverage</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Media</div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0" }}>
              <Column span={4}>
                <div className={styles.category_name}>
                  Transport & Logistics
                </div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Banking & Finance</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Lifestyle</div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0" }}>
              <Column span={4}>
                <div className={styles.category_name}>Co-incubation</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Healthcare</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>
                  Retail & Entertainment
                </div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0" }}>
              <Column span={4}>
                <div className={styles.category_name}>Telco</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Others</div>
              </Column>
              <Column span={4}>
                <div className={styles.category_name}>Start-ups</div>
              </Column>
            </Row>
          </Column>

          <Column span={3}>
            <div>LEGEND</div>
          </Column>
        </Row>
      </div>
    </>
  );
};

export default Categories;

import React from "react";
import { Column } from "../Column";
import Row from "../Row";
import Text from "../Text";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.headingXL}>Let's have a chat</h2>
        <Column span={12}>
          <Row gutter={40}>
            <Column span={2}>
              <h2 className={styles.headingLg}>
                Build<span>➡</span>
              </h2>
              <Text className={styles.headingsm}>Help you build something</Text>
            </Column>
            <div className={styles.headerDivider}></div>
            <Column span={2}>
              <h2 className={styles.headingLg}>
                Co-incubate<span>➡</span>
              </h2>
              <Text className={styles.headingsm}>
                Co-incubate an idea together
              </Text>
            </Column>
            <div className={styles.headerDivider}></div>
            <Column span={2}>
              <h2 className={styles.headingLg}>
                Customise<span>➡</span>
              </h2>
              <Text className={styles.headingsm}>
                Customise a solution for your business
              </Text>
            </Column>
            <div className={styles.headerDivider}></div>
            <Column span={2}>
              <h2 className={styles.headingLg}>
                Organise<span>➡</span>
              </h2>
              <Text className={styles.headingsm}>
                Organise learning sessions with us
              </Text>
            </Column>
          </Row>
        </Column>
        <Column span={12}> </Column>
        <div>
          <Link href="/">
            <a className={styles.href}>
              Copyright © Codigo - Mobile App Developer Singapore
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className={styles.href}>
              +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore
              573970
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;

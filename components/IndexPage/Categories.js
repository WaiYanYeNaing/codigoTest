import React from "react";
import { Column } from "../Column";
import Spacer from "../Spacer";
import Row from "../Row";
import Text from "../Text";
import TextB from "../TextB";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <div className={styles.container}>
        <Row>
          <Column span={7}>
            <Row style={{ margin: "25px 0" }}>
              <Column span={3}>
                <div className={styles.category_name}>All</div>
              </Column>
              <Spacer />
              <Column span={4}>
                <div className={styles.category_name}>Food & Beverage</div>
              </Column>
              <Spacer />
              <Column span={3}>
                <div className={styles.category_name}>Media</div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0" }}>
              <Column span={3}>
                <div className={styles.category_name}>
                  Transport & Logistics
                </div>
              </Column>
              <Spacer />
              <Column span={4}>
                <div className={styles.category_name}>Banking & Finance</div>
              </Column>
              <Spacer />
              <Column span={3}>
                <div className={styles.category_name}>Lifestyle</div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0" }}>
              <Column span={3}>
                <div className={styles.category_name}>Co-incubation</div>
              </Column>
              <Spacer />
              <Column span={4}>
                <div className={styles.category_name}>Healthcare</div>
              </Column>
              <Spacer />
              <Column span={3}>
                <div className={styles.category_name}>
                  Retail & Entertainment
                </div>
              </Column>
            </Row>
            <Row style={{ margin: "20px 0" }}>
              <Column span={3}>
                <div className={styles.category_name}>Telco</div>
              </Column>
              <Spacer />
              <Column span={4}>
                <div className={styles.category_name}>Others</div>
              </Column>
              <Spacer />
              <Column span={3}>
                <div className={styles.category_name}>Start-ups</div>
              </Column>
            </Row>
          </Column>
          <Spacer />
          <Column span={4} style={{ alignSelf: "end" }}>
            <TextB>
              <span className={styles.legend}>LEGEND</span>
            </TextB>

            <div className={styles.legend_details_container}>
              <Row style={{ height: "40px" }}>
                <Column span={6}>
                  <Row>
                    <img
                      className={styles.legend_details_icons}
                      src={"https://www.codigo.co/img/ui/ico-app.svg"}
                    />
                    <Text>
                      <span className={styles.legend_details}>App</span>
                    </Text>
                  </Row>
                </Column>
                <Column span={6}>
                  <Row>
                    <img
                      className={styles.legend_details_icons}
                      src={"https://www.codigo.co/img/ui/ico-web.svg"}
                    />
                    <Text>
                      <span className={styles.legend_details}>WEB</span>
                    </Text>
                  </Row>
                </Column>
              </Row>

              <Row style={{ height: "40px" }}>
                <Column span={6}>
                  <Row>
                    <img
                      className={styles.legend_details_icons}
                      src={"https://www.codigo.co/img/ui/ico-cms.svg"}
                    />
                    <Text>
                      <span className={styles.legend_details}>CMS</span>
                    </Text>
                  </Row>
                </Column>
                <Column span={6}>
                  <Row>
                    <img
                      className={styles.legend_details_icons}
                      src={"https://www.codigo.co/img/ui/ico-uiux.svg"}
                    />
                    <Text>
                      <span className={styles.legend_details}>UI/UX</span>
                    </Text>
                  </Row>
                </Column>
              </Row>
            </div>
          </Column>
        </Row>
      </div>
    </>
  );
};

export default Categories;

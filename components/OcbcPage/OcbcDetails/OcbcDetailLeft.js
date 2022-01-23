import React from "react";
import { Column } from "../../Column";
import Row from "../../Row";
import TextB from "../../TextB";
import styles from "./OcbcDetailLeft.module.css";

const OcbcDetailLeft = () => {
  return (
    <>
      <Row style={{ paddingTop: "140px" }}>
        {/* Title */}
        <Column span={12}>
          <TextB style={{ fontSize: "64px" }}>OCBC Pay Anyone</TextB>
        </Column>

        {/* DownloadType */}
        <Column span={12}>
          <Row>
            {/* App Store */}
            <div
              className={styles.download_card}
              style={{
                borderRightWidth: "0px",
              }}
            >
              <img
                className={styles.download_icon}
                src={"https://www.codigo.co/img/ui/ico-app_store.png"}
              />
              <TextB style={{ fontSize: "9px", letterSpacing: ".05em" }}>
                AVAILABLE ON
              </TextB>
              <TextB style={{ marginTop: "-4px", letterSpacing: "-0.5px" }}>
                App store
              </TextB>
            </div>

            {/* Play Store */}
            <div className={styles.download_card}>
              <img
                className={styles.download_icon}
                src={"https://www.codigo.co/img/ui/ico-google_play-store.png"}
              />
              <TextB style={{ fontSize: "9px", letterSpacing: ".05em" }}>
                AVAILABLE ON
              </TextB>
              <TextB style={{ marginTop: "-4px", letterSpacing: "-0.5px" }}>
                Google play
              </TextB>
            </div>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default OcbcDetailLeft;

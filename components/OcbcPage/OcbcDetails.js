import React from "react";
import { Column } from "../Column";
import Row from "../Row";
import OcbcDetailLeft from "./OcbcDetails/OcbcDetailLeft";
import OcbcDetailRight from "./OcbcDetails/OcbcDetailRight";

const OcbcDetails = () => {
  return (
    <>
      <Row style={{ width: "85%", margin: "0 auto" }}>
        <Column span={6}>
          <OcbcDetailLeft />
        </Column>
        <Column span={6}>
          <OcbcDetailRight />
        </Column>
      </Row>
    </>
  );
};

export default OcbcDetails;

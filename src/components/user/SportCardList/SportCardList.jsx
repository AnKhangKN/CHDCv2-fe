import { Col, Row } from "antd";
import React from "react";
import { IconButton } from "./style";
import { GrNext, GrPrevious } from "react-icons/gr";
import SportCardComponent from "../SportCardComponent/SportCardComponent";

const SportCardList = () => {
  return (
    <div>
      <div className="productDataBestSellers">
        {/* title */}
        <Row align="middle" style={{ marginBottom: "20px" }}>
          <Col span={12}>
            <h2>Các môn thể thao</h2>
          </Col>
          <Col
            span={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton>
              <GrPrevious />
            </IconButton>
            <IconButton>
              <GrNext />
            </IconButton>
          </Col>
        </Row>

        {/* card list */}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <SportCardComponent />
          </Col>
          <Col span={8}>
            <SportCardComponent />
          </Col>
          <Col span={8}>
            <SportCardComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SportCardList;

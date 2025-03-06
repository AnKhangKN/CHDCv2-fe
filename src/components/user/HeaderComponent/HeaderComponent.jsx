import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import { WrapperTopHeader, ListTopHeader } from "./style.js";
import NavBarComponent from "../NavBarComponent/NavBarComponent.jsx";

const HeaderComponent = () => {
  return (
    <>
      <WrapperTopHeader>
        <Col span={12}></Col>
        <Col span={12} style={{ textAlign: "right", paddingRight: "8px" }}>
          <ListTopHeader>
            <li style={{ display: "flex" }}>
              <Link to="" style={{ color: "#333", lineHeight: "36px" }}>
                Theo dõi đơn hàng
              </Link>
              <div
                style={{
                  margin: "12px",
                  height: "12px",
                  borderLeft: "0.5px solid",
                }}
              ></div>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Link to="" style={{ color: "#333", lineHeight: "36px" }}>
                Hỗ trợ
              </Link>
              <div
                style={{
                  margin: "12px",
                  height: "12px",
                  borderLeft: "0.5px solid",
                }}
              ></div>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Link to="" style={{ color: "#333", lineHeight: "36px" }}>
                Đăng ký
              </Link>
            </li>
          </ListTopHeader>
        </Col>
      </WrapperTopHeader>
      <NavBarComponent />
    </>
  );
};

export default HeaderComponent;

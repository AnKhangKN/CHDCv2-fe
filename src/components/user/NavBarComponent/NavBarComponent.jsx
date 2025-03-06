import React from "react";
import { DesktopCategory, IconButton, WrapperHeader } from "./style";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import SearchButton from "../SearchButton/SearchButton";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

const NavBarComponent = () => {
  return (
    <WrapperHeader>
      <Row>
        <Col span={6}>
          <div className="logo-img">
            {" "}
            logo
            <img src="" alt="" srcset="" />
          </div>
        </Col>

        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DesktopCategory>
            <li style={{ padding: "0px 12px" }}>
              {" "}
              <Link to="/" style={{ color: "#333" }}>
                Trang chủ
              </Link>{" "}
            </li>
            <li style={{ padding: "0px 12px" }}>
              {" "}
              <Link to="/products" style={{ color: "#333" }}>
                Sản phẩm
              </Link>{" "}
            </li>
            <li style={{ padding: "0px 12px" }}>
              {" "}
              <Link to="/promotion" style={{ color: "#333" }}>
                Khuyến mãi
              </Link>{" "}
            </li>
            <li style={{ padding: "0px 12px" }}>
              {" "}
              <Link to="/new" style={{ color: "#333" }}>
                Mới nhất
              </Link>{" "}
            </li>
          </DesktopCategory>
        </Col>

        <Col
          span={6}
          style={{
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "8px",
          }}
        >
          <SearchButton />

          <Link to="/favorite" style={{ color: "#333" }}>
            <IconButton>
              <IoMdHeartEmpty />
            </IconButton>
          </Link>

          <Link to="/cart" style={{ color: "#333" }}>
            <IconButton style={{ fontSize: "22px" }}>
              <IoBagOutline />
            </IconButton>
          </Link>
        </Col>
      </Row>
    </WrapperHeader>
  );
};

export default NavBarComponent;

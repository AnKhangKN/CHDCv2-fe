import React, { useState } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import {
  IconButton,
  ContainerSearchButton,
  ContainerSearchInput,
} from "./style";
import { Col, Row } from "antd";

const SearchButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Search button */}
      <ContainerSearchButton
        onClick={() => setIsVisible(true)} // Khi click vào sẽ hiển thị input
      >
        <IconButton>
          <IoSearchOutline />
        </IconButton>
        <span style={{ fontSize: "18px" }}>Tìm kiếm</span>
      </ContainerSearchButton>

      {/* Search input (chỉ hiển thị khi isVisible = true) */}
      {isVisible && (
        <ContainerSearchInput style={{ display: "flex" }}>
          <Row style={{ width: "100%" }}>
            <Col span={4}>Logo</Col>
            <Col span={16}>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Nhập từ khóa..."
                />
              </div>
            </Col>
            <Col span={4}>
              <div
                className=""
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <IconButton onClick={() => setIsVisible(false)}>
                  {/* Đóng input */}
                  <IoCloseSharp />
                </IconButton>
              </div>
            </Col>
          </Row>
        </ContainerSearchInput>
      )}
    </>
  );
};

export default SearchButton;

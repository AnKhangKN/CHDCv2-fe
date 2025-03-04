import React, { useState } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import {
  IconButton,
  ContainerSearchButton,
  ContainerSearchInput,
  ContainerInput,
  TextInput,
  ContainerSearchResult,
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
          <Row style={{ width: "90%" }}>
            <Col span={4}>
              <div className="logo"> anh Logo</div>
            </Col>
            <Col span={16}>
              <ContainerInput>
                <IconButton style={{ position: "absolute", left: "0px" }}>
                  <IoSearchOutline />
                </IconButton>
                <TextInput type="text" placeholder="Nhập từ khóa..." />
              </ContainerInput>
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

      {/* Search result */}
      {isVisible && (
        <ContainerSearchResult>
          <p>Đề xuất</p>
        </ContainerSearchResult>
      )}
    </>
  );
};

export default SearchButton;

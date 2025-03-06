import { Col, Row } from "antd";
import React, { useState } from "react";
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IconButton } from "./style";

const productsDataBestSellers = [
  { id: 1, name: "sanpham1" },
  { id: 2, name: "sanpham2" },
  { id: 3, name: "sanpham3" },
  { id: 4, name: "sanpham4" },
  { id: 5, name: "sanpham5" },
  { id: 6, name: "sanpham6" },
  { id: 7, name: "sanpham7" },
  { id: 8, name: "sanpham8" },
];

const ProductCardList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = 3;

  // Cắt danh sách sản phẩm theo vị trí startIndex
  const visibleProducts = productsDataBestSellers.slice(
    startIndex,
    startIndex + productsToShow
  );

  // Xử lý nút bấm Prev
  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - productsToShow);
    }
  };

  // Xử lý nút bấm Next
  const handleNextClick = () => {
    if (startIndex + productsToShow < productsDataBestSellers.length) {
      setStartIndex(startIndex + productsToShow);
    }
  };

  return (
    <div>
      <div className="productDataBestSellers">
        {/* title */}
        <Row align="middle" style={{ marginBottom: "20px" }}>
          <Col span={12}>
            <h2>Bán chạy nhất</h2>
          </Col>
          <Col
            span={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={handlePrevClick} disabled={startIndex === 0}>
              <GrPrevious />
            </IconButton>
            <IconButton
              onClick={handleNextClick}
              disabled={
                startIndex + productsToShow >= productsDataBestSellers.length
              }
            >
              <GrNext />
            </IconButton>
          </Col>
        </Row>

        {/* card list */}
        <Row gutter={[16, 16]}>
          {visibleProducts.map((productBestSellers) => (
            <Col span={8} key={productBestSellers.id}>
              <ProductCardComponent product={productBestSellers} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductCardList;

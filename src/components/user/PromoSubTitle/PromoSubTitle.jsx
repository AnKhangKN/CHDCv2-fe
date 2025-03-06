import React from "react";
import { ContainerPromoSubTitle } from "./style";
import { Link } from "react-router-dom";

const PromoSubTitle = () => {
  return (
    <ContainerPromoSubTitle>
      <div
        style={{ textAlign: "center", display: "flex", alignItems: "center" }}
      >
        <div className="highlight-section">
          <div style={{ fontSize: "20px" }}>Đang khuyến mãi lên tới 40%</div>
          <Link to={"/promotion"} style={{ color: "#333", fontSize: "16px" }}>
            Đến ngay
          </Link>
        </div>
        <div className="highlight-section">
          <div style={{ fontSize: "20px" }}>Sản phẩm mới ra mắt nè</div>
          <Link to={"/new"} style={{ color: "#333", fontSize: "16px" }}>
            Đến ngay
          </Link>
        </div>
      </div>
    </ContainerPromoSubTitle>
  );
};

export default PromoSubTitle;

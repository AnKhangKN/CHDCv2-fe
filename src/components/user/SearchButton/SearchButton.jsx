import React, { useState } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import {
  IconButton,
  ContainerSearchButton,
  ContainerSearchInput,
} from "./style";

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
          <input type="text" placeholder="Nhập từ khóa..." />
          <IconButton onClick={() => setIsVisible(false)}>
            {/* Đóng input */}
            <IoCloseSharp />
          </IconButton>
        </ContainerSearchInput>
      )}
    </>
  );
};

export default SearchButton;

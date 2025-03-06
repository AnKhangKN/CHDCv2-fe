import styled from "styled-components";

export const WrapperHeader = styled.div`
    padding: 0 48px;
    background-color: #fff;
    height: 60px;

`

export const WrapperSubHeader = styled.div`
    padding: 0 48px;
    background-color: #F5F5F5;
    height: 85px;

`

export const DesktopCategory = styled.ul`
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 0px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 600;
`

export const IconButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: 50%; /* Làm nút bo tròn */
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1); /* Hiệu ứng nền mờ khi hover */
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.2); /* Màu đậm hơn khi click */
    }
`;
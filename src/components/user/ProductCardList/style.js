import { Row } from "antd";
import styled from "styled-components";

export const IconButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border-radius: 50%; 
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: #F5F5F5;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1); /* Hiệu ứng nền mờ khi hover */
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.2); /* Màu đậm hơn khi click */
    }
`;

export const CardList = styled(Row)`
    
`
import styled from "styled-components";
import { Row } from "antd"; // Import Row từ Ant Design

export const WrapperTopHeader = styled(Row)`
    padding: 0 48px;
    background-color: #F5F5F5;
    height: 36px;
    display: flex;
    align-items: center;
`;

export const ListTopHeader = styled.ul`
    list-style: none; 
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    height: 36px;
    padding-right: 6px;
    font-size: 13px;
    font-weight: bold;
`


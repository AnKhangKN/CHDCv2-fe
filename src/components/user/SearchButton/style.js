import styled from "styled-components";

// btn search
export const ContainerSearchButton = styled.div`
    height: 36px;
    width: 170px;
    background-color: #F5F5F5;
    border-radius: 18px;
    display: flex;
    align-items: center;
    margin-right: 12px;
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

// search input
export const ContainerSearchInput = styled.div`
    position: fixed;
    display: none;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding-top: 10px;
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
`

export const TextInput = styled.input`
    width: 100%;
    height: 18px;
    padding: 9px 36px;
    border-radius: 20px;
    border: 0px;
    background-color: #F5F5F5;
    outline: 0px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`

// result
export const ContainerSearchResult = styled.div`
    background-color: #fff;
    padding: 36px 0px 60px 0px;
    position: fixed;
    top: 46px;
    left: 0px;
    right: 0px;
`
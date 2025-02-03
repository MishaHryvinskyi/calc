import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BtnHome = styled(Link)`
    cursor: pointer;
    padding: 20px 40px;
    background-color: skyblue;
    color: white;
    display: block;
    border-radius: 30px;
    width: 100px;
    margin: 20px auto;
    text-decoration: none;

    &:hover {
        background-color: pink;
        color: black;
    }
`;
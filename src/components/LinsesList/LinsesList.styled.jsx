import styled from "@emotion/styled";

export const ContainerLenses = styled.div`
    padding: 30px;
    color: #01352c;
    background-color: #bad8b6;

    & ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    & h2 {
        text-align: center;
        font-size: 32px;
        font-weight: 900;
        margin-bottom: 40px;
    }

    & li {
        text-align: center;
        padding: 20px;
        margin: 0 0 10px 0;
        border-radius: 8px;
        background-color: #61b390;
    }

    & p {
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 20px;
    }

    & span {
        display: inline-block;
        font-weight: 800;
        padding: 2px 8px;
        background-color: white;
        border-radius: 8px;
    }
`;

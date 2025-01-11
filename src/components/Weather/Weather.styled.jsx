import styled from "@emotion/styled";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 36px;
    font-weight: 800;
    align-items: center;
`;

export const IconWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
        margin-right: 20px;
    }
`;
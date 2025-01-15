import styled from "@emotion/styled";

export const FilesedCheckBox = styled.fieldset`
    display: flex;
    justify-content: space-around;
    font-size: 24px;
    font-weight: 600;
    width: 600px;
    padding: 20px 20px 30px 20px;
    border-radius: 6px;

    & legend {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    & label {
        cursor: pointer;
    }

    & input {
        cursor: pointer;
        margin-right: 10px;
    }
`;
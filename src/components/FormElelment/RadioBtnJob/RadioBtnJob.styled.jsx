import styled from "@emotion/styled";

export const InputRadio = styled.input`
    margin-right: 6px;
    color: red;
    cursor: pointer;
`;

export const FilesedRadio = styled.fieldset`
    display: flex;
    justify-content: space-between;
    width: 600px;
    padding: 20px 20px 30px 20px;
    margin-bottom: 20px;
    border-radius: 6px;

    & legend {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    & label {
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
    }
`;
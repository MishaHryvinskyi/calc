import  styled  from '@emotion/styled';

export const TableStyled = styled.table`
    margin: 0 auto;
    align-items: center;
    width: 1800px;
    border-collapse: collapse;
    border: solid 1px black;
    margin-bottom: 80px;

    &th, &td {
        padding: 20px 10px;
        border: 1px solid #2a2a2a;
    }
`;

export const Thead = styled.thead`
    background-color: skyblue;
    padding: 10px;
    border: 1px solid #2a2a2a;
`;

export const Th = styled.th`
    padding: 20px 10px;
    border: 1px solid #2a2a2a;
`;
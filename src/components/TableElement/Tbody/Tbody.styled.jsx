import  styled  from '@emotion/styled';

const urgencyColor = (color) => color ? color : 'white';

export const Td = styled.td`
    background-color: ${({ iSurgency }) => urgencyColor(iSurgency)};
    padding: 20px 10px;
    border: 1px solid #2a2a2a;
    font-weight: 800;
`;
import styled from "@emotion/styled";

const ContainerUser = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContainerInf = styled.div`
    margin-top: 20px;
    width: 100%;
`;

const Iten = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 40px auto;
    justify-content: center;
    background-color: #e1eacd;
    padding: 20px 40px;
    width: 1000px;
    border-radius: 50px;
`;

const OrderNum = styled.p`
    font-size: 24px;
    font-weight: 600;
    & span {
        display: inline-block;
        border-radius: 50%;
        background-color: #bad8b6;
        padding: 10px 18px;
        font-size: 24px;
        font-weight: 800;
        margin-right: 30px;
    }
`;

const Name = styled.p`
    font-size: 24px;
    font-weight: 600;
    & span {
        display: inline-block;
        padding: 5px 20px;
        font-size: 24px;
        font-weight: 800;
        margin-right: 30px;
        color: #01352c;
        background-color: #bad8b6;
        border-radius: 30px;
    }
`;

const UserNumber = styled.p`
    font-size: 24px;
    font-weight: 600;
    & span {
        display: inline-block;
        padding: 5px 20px;
        font-size: 24px;
        font-weight: 800;
        margin-right: 30px;
        color: #e1eacd;
        background-color: #61b390;
        border-radius: 30px;
    }
`;

const TotalPrice = styled.p`
    font-size: 24px;
    font-weight: 600;
    & span {
        display: inline-block;
        padding: 5px 20px;
        font-size: 24px;
        font-weight: 800;
        color: #e1eacd;
        background-color: #01352c;
        border-radius: 30px;
    }
`;

const Lenses = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    & span {
        display: inline-block;
        padding: 5px 20px;
        font-size: 24px;
        font-weight: 800;
        color: #e1eacd;
        background-color: #01352c;
        border-radius: 30px;
    }
`;

const BtnMore = styled.button`
    margin: auto 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    color: #e1eacd;
    background-color: #01352c; 
    border-radius: 50%;
    padding: 10px 10px;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    
    &:hover {
        background-color: red;
    }

    & svg {
        width: 30px;
        height: 30px;
    }
`;
export { Iten, ContainerInf, ContainerUser, Lenses, BtnMore, Name, TotalPrice, OrderNum, UserNumber };
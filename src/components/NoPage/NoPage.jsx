import { BtnHome } from "./NoPage.styled";

const NoPage = () => {
    return (
        <>
            <h2>За даним маршрутом сторінки не знайдено</h2>
            <BtnHome to="/">Повернутися</BtnHome>
        </>
    )
}

export default NoPage;
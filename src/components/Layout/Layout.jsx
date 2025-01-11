import { Outlet } from "react-router-dom";
import { StyledLink, List, Header, Footer } from "./Layout.styled";

const Layout = () => {
    return (
    <>
        <Header>
            <nav>
                <List>
                    <li>
                        <StyledLink to="/">Домашня</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/order">Замовлення</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/orders">Список замовлень</StyledLink>
                    </li>
                </List>
            </nav>
        </Header>
        <main>
            <Outlet />
        </main>
        <Footer>Центральна Оптика Косів 2025</Footer>
    </>
    )
}

export default Layout;
import { Outlet } from "react-router-dom";
import { StyledLink, List, Header, Footer } from "./Layout.styled";
import { FaHome, FaListAlt } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";

const Layout = () => {
    return (
    <>
        <Header>
            <nav>
                <List>
                    <li>
                        <StyledLink to="/"><FaHome />Домашня</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/order"><MdBorderColor/>Замовлення</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/orders"><FaListAlt/>Список</StyledLink>
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
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled.header`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    background-color: rgb(61, 56, 56);
    margin: 0 auto;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 200px;
  font-size: 24px;
  font-weight: 700;
  padding: 15px;
  background-color: skyblue;
  color: white;
  box-shadow: 3px 7px 68px 2px rgba(135,207,235,1);
  border-radius: 20px;
  text-decoration: none;

  &:hover {
    color: skyblue;
    background-color: white;
    box-shadow: 3px 7px 68px 2px white;
  }

  &.active {
    background-color: orange;
    box-shadow: 3px 7px 68px 2px rgb(235, 183, 135);
  }

`;

const List = styled.ul`
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
    margin: 0;

  & li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const Footer = styled.footer`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    background-color: rgb(61, 56, 56);
    margin: 0 auto;
    color: skyblue;
`;

export { 
    Header,
    StyledLink,
    List,
    Footer
 };
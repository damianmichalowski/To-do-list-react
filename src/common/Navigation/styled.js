import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink)`
    color: ${({theme}) => theme.color.white};
    text-decoration: none;

    &.${activeClassName} {
      font-weight: bold;
    }
`;

export const NavBar = styled.nav`
  background-color: ${({theme}) => theme.color.teal};
  `;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  list-style: none;
  margin-top: 0;
  padding: 10px;
`;

export const ListItem = styled.li`
`;
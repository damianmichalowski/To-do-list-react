import { StyledNavLink, NavBar, List, ListItem} from "./styled"

const Navigation = () => (
    <NavBar>
        <List>
            <ListItem>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to="/author">O autorze</StyledNavLink>
            </ListItem>
        </List>
    </NavBar>
);

export default Navigation;
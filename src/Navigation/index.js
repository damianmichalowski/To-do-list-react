import { StyledNavLink, NavBar, List, ListItem} from "./styled"
import { toTask, toAuthor, toTasks } from "../routes";

const Navigation = () => (
    <NavBar>
        <List>
            <ListItem>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </ListItem>
        </List>
    </NavBar>
);

export default Navigation;
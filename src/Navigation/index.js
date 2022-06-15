import { StyledNavLink, NavBar, List, ListItem} from "./styled"
import { toTask, toAuthor, toTasks } from "../routes";

const Navigation = () => (
    <NavBar>
        <List>
            <li>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </li>
        </List>
    </NavBar>
);

export default Navigation;
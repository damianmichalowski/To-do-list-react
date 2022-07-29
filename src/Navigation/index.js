import { StyledNavLink, NavBar, List} from "./styled"
import { toAuthor, toTasks } from "../routes";

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
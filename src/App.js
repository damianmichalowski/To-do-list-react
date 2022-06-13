import { Redirect } from "react-router-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./Navigation"
import { toTasks, toAuthor, toTask } from "./routes";

export default () => (
    <HashRouter>
        <Navigation />
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route path={toTasks()}>
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
    </HashRouter>
);
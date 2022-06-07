import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "../TasksPage/buttonsText/Buttons";
import ButtonRandomTasks from "../TasksPage/buttonsText/ButtonRandomTask";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj Zadanie"
        body={<Form />}
        extraHeaderContent={<ButtonRandomTasks />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista Zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;

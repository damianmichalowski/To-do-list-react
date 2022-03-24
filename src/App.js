import Form from "./Form"
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Poćwiczyć", done: true },
  { id: 2, content: "Pouczyć się", done: false },
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj Zadanie"
        body={<Form />}
      />

      <Section
        title="Lista Zadań"
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
      />
    </Container>
  );
}

export default App;

import { useState } from "react";
import Form from "./Form"
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  
  const [tasks, setTasks] = useState([
    { id: 1, content: "Poćwiczyć", done: true },
    { id: 2, content: "Pouczyć się", done: false },
  ]);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
  };

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj Zadanie"
        body={<Form />}
      />

      <Section
        title="Lista Zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;

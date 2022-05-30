import { useState } from "react";
import Form from "../../features/tasks/Form"
import TasksList from "../../features/tasks/TasksList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function TasksApp() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj Zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista Zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
      />
    
    </Container>
  );
}

export default TasksApp;

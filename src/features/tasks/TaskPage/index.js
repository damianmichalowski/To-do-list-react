import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskByID } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskByID(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😕"}
                body={task ?
                    <>
                        <strong>Ukończono:</strong> {task.done ? " Tak" : " Nie"}
                    </> : null
                }
            />
        </Container>
    )
}

export default TaskPage;

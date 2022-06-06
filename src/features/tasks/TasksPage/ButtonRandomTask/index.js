import { Button } from "../styledButtons";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

export const ButtonRandomTask = () => {
    const dispatch = useDispatch();

    
    return (
        <>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </>
    )
};
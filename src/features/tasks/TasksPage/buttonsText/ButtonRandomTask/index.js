import { Button } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../../tasksSlice";


const ButtonRandomTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <>
            <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </>
    );
};

export default ButtonRandomTasks;
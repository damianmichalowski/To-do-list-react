import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item ${hideDone && task.done ? "tasks__item--hidden" : ""}`}
            >
                <button className="tasks__button tasks__buttonDone">{task.done ? "✔" : ""}</button>
                <p className={`tasks__itemContent ${task.done ? "tasks__itemContent--done" : ""}`}>{task.content}</p>
                <button onClick={() => removeTask(task.id)} className="tasks__button tasks__buttonRemove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
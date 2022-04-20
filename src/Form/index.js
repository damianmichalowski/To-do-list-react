import "./style.css";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if(trimmedNewTaskContent === ""){
            setNewTaskContent("");
            return;
        };
        
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                ref={inputRef}
            />
            <button onClick={() => inputRef.current.focus()} className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;
import { useState, useRef } from "react";
import { StyledForm , Input, Button } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
                ref={inputRef}
            />
            <Button onClick={() => inputRef.current.focus()}>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;
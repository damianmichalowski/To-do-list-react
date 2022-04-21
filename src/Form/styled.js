import styled from "styled-components";

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width:767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid lightgray;
`;

export const Button = styled.button`
    font-weight: 300;
    padding: 10px;
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: white;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
     background-color: hsl(180, 100%, 30%);
     transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;
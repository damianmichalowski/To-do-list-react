import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    margin-left: 20px;
    border: none;
    background-color: transparent;
    color: teal;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
        color: rgb(179, 179, 179);
    }

    @media (max-width: 767px) {
        margin: 10px 0;
    }
`;
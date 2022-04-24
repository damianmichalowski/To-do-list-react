import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({theme}) => theme.color.nobel};
`;

export const Button = styled.button`
    font-weight: 300;
    padding: 10px;
    border: none;
    background-color: ${({theme}) => theme.color.teal};
    color: ${({theme}) => theme.color.white};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
     filter: brightness(110%);
     transform: scale(1.1);
    }

    &:active {
        filter: brightness(120%);
    }
`;
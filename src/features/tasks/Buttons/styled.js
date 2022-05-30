import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    margin-left: 20px;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(130%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.lightGrey};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px 0;
    }
`;
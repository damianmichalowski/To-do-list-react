import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid grey;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.p`
    margin: 0;
    align-self: center;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: 0;
    padding: 0;
    margin: 0;
    height: 30px;
    width: 30px;
    color: ${({theme}) => theme.color.white};
    transition: background 0.3s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({theme}) => theme.color.bilbao};

        &:hover{
            filter: brightness(130%);
        }
    `}

    ${({remove}) => remove && css`
        background: ${({theme}) => theme.color.red};

        &:hover{
            filter: brightness(130%);
        }
    `}
`;
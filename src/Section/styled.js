import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 900px;
    width: 100%;
    box-shadow: 0px 0px 8px rgb(204, 204, 204);
`;

export const Header = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    background-color: white;
    padding: 20px;
    margin: 0;
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Body = styled.section`
    background-color: white;
    padding: 20px;
`;
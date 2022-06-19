import styled from "styled-components";

const ButtonContainer = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    padding: 0 16px;

    &:hover{
        border-bottom: 2px solid var(--color-smooth-green);
    }
`;

export default ButtonContainer;

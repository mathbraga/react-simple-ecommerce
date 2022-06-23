import styled from "styled-components";

const HeaderButtonsContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    height: 100%;

    &:first-child{
        justify-content: flex-start;
    }

    &:last-child{
        justify-content: flex-end;
    }

    *{
        color: var(--color-black);
        text-decoration: none;

        height: 100%;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
    }

    .temporary-class{
        display: flex;
        justify-content: center;
        align-items: center;

        height: auto;
    }

    .active-page{
        border-bottom: 2px solid var(--color-smooth-green);
        color: var(--color-smooth-green);
    }
`;

export default HeaderButtonsContainer;

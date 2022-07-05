import styled from "styled-components";

const HeaderButtonsContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
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

    .header-interactable-icon{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: baseline;

        height: auto;

        color: var(--color-black);
        font-weight: 500;
        font-size: 1.125rem;

        cursor: pointer;
    }

    .active-page{
        border-bottom: 2px solid var(--color-smooth-green);
        color: var(--color-smooth-green);
        font-weight: 600;
    }
`;

export default HeaderButtonsContainer;

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
        height: 100%;
    }

    .header-interactable-icon{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: baseline;

        height: auto;

        font-weight: 500;
        font-size: 1.125rem;

        cursor: pointer;
    }

    .page-link{
        box-sizing: border-box;
        border-bottom: 2px solid transparent;

        text-decoration: none;
    }

    .active-page{
        box-sizing: border-box;
        border-bottom: 2px solid var(--color-smooth-green);
        color: var(--color-smooth-green);
        font-weight: 600;

        text-decoration: none;
    }
`;

export default HeaderButtonsContainer;

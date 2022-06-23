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
    }

    .temporary-class{
        display: flex;
        justify-content: center;
        align-items: center;

        height: auto;
    }
`;

export default HeaderButtonsContainer;

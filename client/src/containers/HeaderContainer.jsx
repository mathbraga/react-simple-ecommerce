import styled from "styled-components";

const HeaderContainer = styled.div`
    position: relative;

    width: 100%;
    height: 80px;
    left: 0;
    top: 0;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 100px;
    box-sizing: border-box;

    .buttons{
        height: 100%;

        display: flex;
        align-items: center;
        gap: 28%;
    }
`;

export default HeaderContainer;

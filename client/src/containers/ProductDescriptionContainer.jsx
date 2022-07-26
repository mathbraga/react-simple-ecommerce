import styled from "styled-components";

const ProductDescriptionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.hasGallery ? "1fr 5fr 2fr" : "3fr 1fr"};
    justify-items: start;

    .slider-arrow{
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    .slider-arrow-disabled{
        display: flex;
        justify-content: center;
        align-items: center;

        pointer-events: none;
        opacity: 0.2;
    }
`;

export default ProductDescriptionContainer;

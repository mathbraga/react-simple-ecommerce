import styled from "styled-components";

const ProductDescriptionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.hasGallery ? "1fr 5fr 2fr" : "3fr 1fr"};
    justify-items: start;
`;

export default ProductDescriptionContainer;

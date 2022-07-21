import styled from "styled-components";

const ProductDescriptionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.hasGallery ? "1fr 5fr 2fr" : "3fr 1fr"};
    justify-items: start;

    .section-description{
        font-size: 1.875rem;
        font-weight: 400;

        .item-brand{
            font-size: 1.875rem;
            font-weight: 600;
        }
    }
`;

export default ProductDescriptionContainer;

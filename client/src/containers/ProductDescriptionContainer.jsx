import styled from "styled-components";

const ProductDescriptionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.hasGallery ? "1fr 4fr 2fr" : "2fr 1fr"};
    justify-items: start;

    .image-main{
        justify-self: center;

        img{
            height: 511px;
            width: fill;
        }
    }

    .image-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 36px;

        div{
            cursor: pointer;
        }

        img{
            height: 80px;
            width: fill;
        }
    }

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

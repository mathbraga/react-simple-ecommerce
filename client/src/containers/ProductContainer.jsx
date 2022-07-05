import styled from "styled-components";

const ProductContainer = styled.div`
    position: relative;
    width: 386px;
    height: auto;
    padding: 16px;

    cursor: pointer;

    transition: box-shadow 250ms;

    &.no-stock{
        color: var(--color-grey);
        pointer-events: none;

        img{
            opacity: 0.4;
        }
    }

    .product-image{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .no-stock-notice{
            position: absolute;
            z-index: 99;

            font-size: 24px;
            color: var(--color-grey);
        }

        img{
            width: fill;
            height: 330px;
        }
    }

    .product-name{
        font-size: 1.125rem;
        font-weight: 300;
    }

    .product-price{
        font-size: 1.125rem;
        font-weight: 500;
    }

    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.3);
    }
`;

export default ProductContainer;

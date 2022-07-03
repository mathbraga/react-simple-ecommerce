import styled from "styled-components";

const ProductContainer = styled.div`
    width: 386px;
    height: auto;
    padding: 16px;

    cursor: pointer;

    transition: box-shadow 250ms;

    .product-image{
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: fill;
            height: 330px;
        }
    }

    .product-name{
        font-size: 18px;
        font-weight: 300;
    }

    .product-price{
        font-size: 18px;
        font-weight: 500;
    }

    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`;

export default ProductContainer;

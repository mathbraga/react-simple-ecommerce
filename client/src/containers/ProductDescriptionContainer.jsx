import styled from "styled-components";

const ProductDescriptionContainer = styled.div`
    width: 100%;
    display: flex;

    .section-images{
        display: flex;
        align-items: flex-start;

        .image-main{
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

            img{
                height: 80px;
                width: fill;
            }
        }
    }
`;

export default ProductDescriptionContainer;

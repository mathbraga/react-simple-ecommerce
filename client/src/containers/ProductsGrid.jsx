import styled from "styled-components";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
    grid-template-rows: auto;
    gap: 100px 40px;
    justify-items: center;
    justify-content: center;
`;

export default ProductsGrid;

import React, { PureComponent } from "react";
import styled from "styled-components";

const ProductDetailsStyles = styled.div`
    font-size: 1.875rem;
    font-weight: 400;

    .product-brand{
        font-size: 1.875rem;
        font-weight: 600;
    }
`;

class ProductDetails extends PureComponent{
    render(){
        return(
            <ProductDetailsStyles>
                <div className="product-brand">{this.props.brand}</div>
                <div>{this.props.name}</div>
            </ProductDetailsStyles>
        )
    }
}

export default ProductDetails;
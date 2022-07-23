import React, { PureComponent } from "react";
import styled from "styled-components";

const ProductDetailsStyles = styled.div`
    font-size: 1.875rem;
    font-weight: 400;

    .product-brand{
        font-size: 1.875rem;
        font-weight: 600;
    }

    .description{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
`;

class ProductDetails extends PureComponent{
    setHTML = () => {
        return {__html: this.props.description}
    }

    render(){
        return(
            <ProductDetailsStyles>
                <div className="product-brand">{this.props.brand}</div>
                <div>{this.props.name}</div>
                <div className="description" dangerouslySetInnerHTML={this.setHTML()}/>
            </ProductDetailsStyles>
        )
    }
}

export default ProductDetails;
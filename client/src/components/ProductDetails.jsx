import React, { PureComponent } from "react";
import styled from "styled-components";

const ProductDetailsStyles = styled.div`
    font-size: 1.875rem;
    font-weight: 400;
    justify-self: stretch;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    .product-brand{
        font-size: 1.875rem;
        font-weight: 600;
    }

    .description{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .btn-cart{
        font-weight: 600;
        color: white;

        width: 100%;
        background-color: var(--color-smooth-green);

        border: none;
        padding: 20px;

        cursor: pointer;
    }
`;

class ProductDetails extends PureComponent{
    setHTML = () => {
        return {__html: this.props.description}
    }

    render(){
        return(
            <ProductDetailsStyles>
                <div>
                    <div className="product-brand">{this.props.brand}</div>
                    <div>{this.props.name}</div>
                </div>
                <button className="btn-cart">ADD TO CART</button>
                <div className="description" dangerouslySetInnerHTML={this.setHTML()}/>
            </ProductDetailsStyles>
        )
    }
}

export default ProductDetails;
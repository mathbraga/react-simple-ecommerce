import React, { PureComponent } from "react";
import styled from "styled-components";
import Price from "./Price";
import ProductTitle from "./ProductTitle";

const Styles = styled.div`
`;

class CartItem extends PureComponent {
    render(){
        const {
            name,
            brand,
            prices
        } = this.props.product;

        return(
            <Styles>
                <ProductTitle size="1.875rem" weight="600">{brand}</ProductTitle>
                <ProductTitle size="1.875rem" weight="400">{name}</ProductTitle>
                <Price size="1.5rem" weight="700" priceList={prices} />
            </Styles>
        )
    }
}

export default CartItem;

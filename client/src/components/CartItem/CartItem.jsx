import React, { PureComponent } from "react";
import styled from "styled-components";
import Price from "../Price";
import Title from "../Title";

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
                <Title size="1.875rem" weight="600">{brand}</Title>
                <Title size="1.875rem" weight="400">{name}</Title>
                <Price size="1.5rem" weight="700" priceList={prices} />
            </Styles>
        )
    }
}

export default CartItem;

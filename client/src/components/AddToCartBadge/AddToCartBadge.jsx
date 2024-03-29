import React, { PureComponent } from "react";
import styled from "styled-components";
import cardCartIcon from "../../assets/icons/card-cart.svg";

const Styles = styled.div`
    position: absolute;
    top: 90%;
    left: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 52px;
    height: 52px;
    border-radius: 50%;

    img{
        height: 24px;
        width: 24px;
        transform: translateX(-2px);
    }

    background-color: var(--color-smooth-green);

    :active{
        background-color: var(--color-smooth-green-dark);
    }
`;

class AddToCartBadge extends PureComponent {
    render(){
        return(
            <Styles className={this.props.className} onClick={this.props.onClick}>
                <img src={cardCartIcon} alt="Add to cart" />
            </Styles>
        )
    }
}

export default AddToCartBadge;

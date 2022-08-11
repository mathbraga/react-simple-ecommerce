import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import cartIcon from '../../assets/icons/cart.svg';
import CartOverlay from "../CartOverlay";

const Styles = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    height: auto;

    cursor: pointer;

    .cart-counter{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 0.875rem;
        color: white;

        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--color-black);

        transform: translate(10px, -8px);
    }
`;

class Cart extends PureComponent {
    render(){
        const { cartAmount, ...cartItems } = this.props.cartItems;
        const { currency } = this.props

        return(
            <Styles onClick={this.props.onClick}>
                <img src={cartIcon} alt="Cart" />
                {cartAmount ? 
                    <div className="cart-counter">{cartAmount}</div> : null}
                {this.props.isOverlay ? 
                    <CartOverlay 
                        quantity={cartAmount} 
                        items={cartItems} 
                        currency={currency}
                    /> : null}
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.defaultCurrency
})

export default connect(mapStateToProps)(Cart);

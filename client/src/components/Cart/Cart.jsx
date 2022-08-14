import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import cartIcon from '../../assets/icons/cart.svg';

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

        pointer-events: none;
    }

    img{
        pointer-events: none;
    }
`;

class Cart extends PureComponent {
    render(){
        const { cartAmount } = this.props;

        return(
            <Styles onClick={this.props.onClick} id="cart-btn">
                <img src={cartIcon} alt="Cart" />
                {cartAmount ? 
                    <div className="cart-counter">{cartAmount}</div> : null}
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    cartAmount: state.cart.cartItems.cartAmount
})

export default connect(mapStateToProps)(Cart);

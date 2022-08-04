import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import cartIcon from '../assets/icons/cart.svg';

const Styles = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    height: auto;

    cursor: pointer;
`;

class Cart extends PureComponent {
    render(){
        return(
            <Styles>
                <img src={cartIcon} alt="Cart" />
                <div>{this.props.cartAmount}</div>
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    cartAmount: state.cart.cartItems.cartAmount
})

export default connect(mapStateToProps)(Cart);

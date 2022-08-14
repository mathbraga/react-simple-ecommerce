import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../../containers/HeaderContainer';
import HeaderButtonsContainer from '../../containers/HeaderButtonsContainer';
import ButtonContainer from '../../containers/HeaderLinkContainer';
import logoIcon from '../../assets/icons/a-logo.svg';
import CurrencySwitcher from '../CurrencySwitcher';
import Cart from '../Cart';
import CartOverlay from '../CartOverlay';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PageOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;

    background-color: rgba(57, 55, 72, 0.22);

    z-index: 10;
`;

class Header extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            cartOverlay: false
        }
    }

    handleActiveLink = (isActive) => isActive ? "active-page" : "page-link";

    toggleOverlay = () => {
        this.setState((state) => ({
            cartOverlay: !state.cartOverlay
        }))
    }

    render(){
        const { cartAmount, ...cartItems } = this.props.cartItems;
        const { currency } = this.props

        return(
            <div>
                <HeaderContainer>
                    <HeaderButtonsContainer>
                        <NavLink 
                            to="all"
                            className={({isActive}) => this.handleActiveLink(isActive)}
                        >
                            <ButtonContainer>
                                ALL
                            </ButtonContainer>
                        </NavLink>
                        <NavLink 
                            to="tech"
                            className={({isActive}) => this.handleActiveLink(isActive)}
                        >
                            <ButtonContainer>
                                TECH
                            </ButtonContainer>
                        </NavLink>
                        <NavLink 
                            to="clothes"
                            className={({isActive}) => this.handleActiveLink(isActive)}
                        >
                            <ButtonContainer>
                                CLOTHES
                            </ButtonContainer>
                        </NavLink>
                    </HeaderButtonsContainer>
                    <img src={logoIcon} alt="Header logo" />
                    <HeaderButtonsContainer>
                        <CurrencySwitcher />
                        <Cart onClick={this.toggleOverlay} />
                        {this.state.cartOverlay ? 
                            <CartOverlay 
                                quantity={cartAmount} 
                                cartItems={cartItems}
                                currency={currency}
                                triggerer={this.toggleOverlay}
                            /> : null}
                    </HeaderButtonsContainer>
                </HeaderContainer>
                {this.state.cartOverlay ? <PageOverlay /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
    currency: state.currency.defaultCurrency
})

export default connect(mapStateToProps)(Header);

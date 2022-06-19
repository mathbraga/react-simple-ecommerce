import React, { PureComponent } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderButtonsContainer from '../containers/HeaderButtonsContainer';
import logo from '../assets/icons/a-logo.svg';

class Header extends PureComponent{
    render(){
        return(
            <HeaderContainer>
                <HeaderButtonsContainer>
                    <div>WOMEN</div>
                    <div>MEN</div>
                    <div>KIDS</div>
                </HeaderButtonsContainer>
                <img src={logo} alt="Header logo" />
                <HeaderButtonsContainer>
                    <div style={{marginRight: '16px'}}>$</div>
                    <div>CART</div>
                </HeaderButtonsContainer>
            </HeaderContainer>
        );
    }
}

export default Header;

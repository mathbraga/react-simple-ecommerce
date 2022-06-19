import React, { PureComponent } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderButtonsContainer from '../containers/HeaderButtonsContainer';
import ButtonContainer from '../containers/ButtonContainer';
import logo from '../assets/icons/a-logo.svg';

class Header extends PureComponent{
    render(){
        return(
            <HeaderContainer>
                <HeaderButtonsContainer>
                    <ButtonContainer>
                        <div>WOMEN</div>
                    </ButtonContainer>
                    <ButtonContainer>
                        <div>MEN</div>
                    </ButtonContainer>
                    <ButtonContainer>
                        <div>KIDS</div>
                    </ButtonContainer>
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

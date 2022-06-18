import React, { PureComponent } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import logo from '../assets/icons/a-logo.svg';

class Header extends PureComponent{
    render(){
        return(
            <HeaderContainer>
                <div className='buttons'>
                    <div>WOMEN</div>
                    <div>MEN</div>
                    <div>KIDS</div>
                </div>
                <img src={logo} alt="Header logo" />
                <div className='buttons'>
                    <div>$</div>
                    <div>CART</div>
                </div>
            </HeaderContainer>
        );
    }
}

export default Header;

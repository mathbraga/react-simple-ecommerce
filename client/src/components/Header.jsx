import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderButtonsContainer from '../containers/HeaderButtonsContainer';
import ButtonContainer from '../containers/ButtonContainer';
import logo from '../assets/icons/a-logo.svg';

class Header extends PureComponent{
    render(){
        return(
            <HeaderContainer>
                <HeaderButtonsContainer>
                    <Link to="women">
                        <ButtonContainer>
                            WOMEN
                        </ButtonContainer>
                    </Link>
                    <Link to="men">
                        <ButtonContainer>
                            MEN
                        </ButtonContainer>
                    </Link>
                    <Link to="kids">
                        <ButtonContainer>
                            KIDS
                        </ButtonContainer>
                    </Link>
                </HeaderButtonsContainer>
                <img src={logo} alt="Header logo" />
                <HeaderButtonsContainer>
                    <div className='temporary-class' style={{marginRight: '16px'}}>$</div>
                    <div className='temporary-class'>CART</div>
                </HeaderButtonsContainer>
            </HeaderContainer>
        );
    }
}

export default Header;

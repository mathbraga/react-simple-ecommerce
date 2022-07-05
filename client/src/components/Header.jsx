import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderButtonsContainer from '../containers/HeaderButtonsContainer';
import ButtonContainer from '../containers/ButtonContainer';
import logoIcon from '../assets/icons/a-logo.svg';
import CurrencySwitcher from './CurrencySwitcher';
import Cart from './Cart';

class Header extends PureComponent{
    handleActiveLink = (isActive) => isActive ? "active-page" : "page-link";

    render(){
        return(
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
                    <Cart />
                </HeaderButtonsContainer>
            </HeaderContainer>
        );
    }
}

export default Header;

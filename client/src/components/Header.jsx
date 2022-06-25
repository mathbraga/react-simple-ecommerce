import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderButtonsContainer from '../containers/HeaderButtonsContainer';
import ButtonContainer from '../containers/ButtonContainer';
import logoIcon from '../assets/icons/a-logo.svg';
import cartIcon from '../assets/icons/cart.svg';

class Header extends PureComponent{
    handleActiveLink = (isActive) => isActive ? "active-page" : null;

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
                    <div className='temporary-class' style={{marginRight: '16px'}}>$</div>
                    <img src={cartIcon} alt="Cart" className='temporary-class' />
                </HeaderButtonsContainer>
            </HeaderContainer>
        );
    }
}

export default Header;

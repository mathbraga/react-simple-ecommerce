import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderContainer from '../../containers/HeaderContainer';
import HeaderButtonsContainer from '../../containers/HeaderButtonsContainer';
import ButtonContainer from '../../containers/HeaderLinkContainer';
import logoIcon from '../../assets/icons/a-logo.svg';
import CurrencySwitcher from '../CurrencySwitcher';
import Cart from '../Cart';
import styled from 'styled-components';

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
                        <Cart isOverlay={this.state.cartOverlay} onClick={this.toggleOverlay} />
                    </HeaderButtonsContainer>
                </HeaderContainer>
                {this.state.cartOverlay ? <PageOverlay /> : null}
            </div>
        );
    }
}

export default Header;

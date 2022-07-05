import React, { PureComponent } from "react";
import styled from "styled-components";
import downArrow from '../assets/icons/arrow.svg';

const Styles = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    height: auto;
    margin-right: 20px;

    color: var(--color-black);
    font-weight: 500;
    font-size: 1.125rem;

    cursor: pointer;

    .currency-arrow{
        margin-left: 6px;
        transition: transform 250ms;
        transform: rotate3d(1, 0, 0, ${props => props.arrowDeg});
    }

    .currency-menu{
        display: ${props => props.displayMenu};
        position: absolute;
        top: 100%;
        height: auto;
        padding: 10px 0;

        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.3);

        cursor: default;

        .currency-option{
            padding: 10px 20px;

            cursor: pointer;
        }

        .currency-option:hover{
            background-color: #EEEEEE;
        }
    }
`;

class CurrencySwitcher extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            displayMenu: false
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return {displayMenu: !state.displayMenu}
        })
    };

    handleArrowDegree = () => {
        return this.state.displayMenu ? "180deg" : "0deg";
    }

    handleMenu = () => {
        return this.state.displayMenu ? "block" : "none";
    }

    render(){
        return(
            <Styles onClick={this.handleClick} arrowDeg={this.handleArrowDegree} displayMenu={this.handleMenu}>
                <div>$</div>
                <img src={downArrow} alt="arrow down" className="currency-arrow" />
                <div className="currency-menu">
                    <div className="currency-option">$ USD</div>
                    <div className="currency-option">€ EUR</div>
                    <div className="currency-option">¥ JPY</div>
                </div>
            </Styles>
        )
    }
}

export default CurrencySwitcher;

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
`;

class CurrencySwitcher extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            arrowDeg: false
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return {arrowDeg: !state.arrowDeg}
        })
    };

    handleArrowDegree = () => {
        return this.state.arrowDeg ? "180deg" : "0deg";
    }

    render(){
        return(
            <Styles onClick={this.handleClick} arrowDeg={this.handleArrowDegree}>
                <div>$</div>
                <img src={downArrow} alt="arrow down" className="currency-arrow" />
            </Styles>
        )
    }
}

export default CurrencySwitcher;

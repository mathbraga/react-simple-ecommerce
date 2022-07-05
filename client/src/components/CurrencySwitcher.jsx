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
    }
`;

class CurrencySwitcher extends PureComponent {
    render(){
        return(
            <Styles>
                <div>$</div>
                <img src={downArrow} alt="v" className='currency-arrow' />
            </Styles>
        )
    }
}

export default CurrencySwitcher;

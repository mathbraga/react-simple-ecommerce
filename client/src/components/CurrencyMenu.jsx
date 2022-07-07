import React, { PureComponent } from "react";
import styled from "styled-components";

const Styles = styled.div`
    display: block;
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
`;

class CurrencyMenu extends PureComponent {
    closeMenu = (event) => {
        const notButtonOrMenu = event.target.id !== this.props.triggererId;

        if(notButtonOrMenu){
            this.props.trigger();
        }
    }

    componentDidMount = () => {
        document.addEventListener("click", this.closeMenu);
    }

    componentWillUnmount = () => {
        document.removeEventListener("click", this.closeMenu);
    }

    render(){
        return(
            <Styles id="currency-menu">
                <div className="currency-option">$ USD</div>
                <div className="currency-option">€ EUR</div>
                <div className="currency-option">¥ JPY</div>
            </Styles>
        )
    }
}

export default CurrencyMenu;

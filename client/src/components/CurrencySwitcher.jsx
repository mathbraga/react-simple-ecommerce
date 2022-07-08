import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { update } from "../store/reducers/currencySlice";
import styled from "styled-components";
import downArrow from '../assets/icons/arrow.svg';
import CurrencyMenu from "./CurrencyMenu";
import { client, Query } from "@tilework/opus";

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

    .no-pointer-events{
        pointer-events: none;
    }
`;

class CurrencySwitcher extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            displayMenu: false,
            currencyList: []
        }

        this.switcherBtnId = "currency-btn";
    }

    handleMenuClick = () => {
        this.setState((state) => {
            return { displayMenu: !state.displayMenu }
        });
    };

    handleArrowDegree = () => {
        return this.state.displayMenu ? "180deg" : "0deg";
    }

    queryCurrencyList = async () => {
        const query = new Query("currencies", true)
            .addFieldList(["label", "symbol"]);
        const result = await client.post(query);

        this.setState(() => {
            return { currencyList: result.currencies }
        })
    }

    componentDidMount = () => {
        this.queryCurrencyList();
    }

    render(){
        return(
            <Styles
                id={this.switcherBtnId}
                onClick={this.handleMenuClick} 
                arrowDeg={this.handleArrowDegree} 
                displayMenu={this.handleMenu}
            >
                <div className="no-pointer-events">{this.props.defaultCurrency}</div>
                <img src={downArrow} alt="arrow down" className="currency-arrow no-pointer-events" />
                {this.state.displayMenu ? 
                    <CurrencyMenu 
                        triggererId={this.switcherBtnId} 
                        trigger={this.handleMenuClick}
                        currencies={this.state.currencyList}
                        updater={this.props.updateCurrency}
                    /> 
                    : 
                    null}
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    defaultCurrency: state.currency.defaultCurrency
});

const mapDispatchToProps = (dispatch) => ({
    updateCurrency: (currency) => dispatch(update(currency))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);

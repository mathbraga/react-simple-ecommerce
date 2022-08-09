import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Styles = styled.div`
    font-size: ${props => props.size ? props.size : 'inherit'};
    font-weight: ${props => props.weight ? props.weight : 'inherit'};
`;

class Price extends PureComponent {
    returnSelectedCurrency = () => {
        const { priceList, defaultCurrency } = this.props;

        return `${priceList[defaultCurrency].currency.symbol}${priceList[defaultCurrency].amount}`;
    }

    render(){
        const { size, weight } = this.props;

        return(
            <Styles size={size} weight={weight}>
                {this.returnSelectedCurrency()}
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    defaultCurrency: state.currency.defaultCurrency
});

export default connect(mapStateToProps)(Price);

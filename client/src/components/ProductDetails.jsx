import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Styles = styled.div`
    font-size: 1.875rem;
    font-weight: 400;
    justify-self: stretch;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    .product-brand{
        font-size: 1.875rem;
        font-weight: 600;
    }

    .description{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .btn-cart{
        font-weight: 600;
        color: white;

        width: 100%;
        background-color: var(--color-smooth-green);

        border: none;
        padding: 20px;

        cursor: pointer;
    }

    .fragment-title{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
    }

    .price-value{
        font-weight: 700;
        font-size: 1.5rem;
    }

    .attribute-options{
        display: flex;

        div{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 400;
            font-size: 1rem;
        }
    }
`;

class ProductDetails extends PureComponent{
    setHTML = () => {
        return {__html: this.props.description}
    }

    returnSelectedCurrency = () => {
        const price = this.props.prices.filter(
            item => item.currency.symbol === this.props.defaultCurrency
        );

        return `${price[0].currency.symbol} ${price[0].amount}`;
    }

    render(){
        const price = this.returnSelectedCurrency();
        console.log(this.props.attributes);

        return(
            <Styles>
                <div>
                    <div className="product-brand">{this.props.brand}</div>
                    <div>{this.props.name}</div>
                </div>
                {this.props.attributes.map(
                    (item, index) => 
                        <div key={index}>
                            <div className="fragment-title" >{`${item.name}:`}</div>
                            <div className="attribute-options">
                                {item.items.map(
                                    (item, index) => <div key={index}>{item.value}</div>)}
                            </div>
                        </div>
                )}
                <div>
                    <div className="fragment-title">PRICE:</div>
                    <div className="price-value">{price}</div>
                </div>
                <button className="btn-cart">ADD TO CART</button>
                <div className="description" dangerouslySetInnerHTML={this.setHTML()}/>
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    defaultCurrency: state.currency.defaultCurrency
})

export default connect(mapStateToProps)(ProductDetails);
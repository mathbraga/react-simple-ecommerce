import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItemToCart } from "../store/reducers/cartSlice";
import Attributes from "./Attribute";

const Styles = styled.div`
    font-size: 1.875rem;
    font-weight: 400;
    color: var(--color-black);
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
`;

class ProductDetails extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            ...this.returnAttributesObject()
        }
    }

    setHTML = () => {
        return {__html: this.props.description}
    }

    returnSelectedCurrency = () => {
        const price = this.props.prices.filter(
            item => item.currency.symbol === this.props.defaultCurrency
        );

        return `${price[0].currency.symbol} ${price[0].amount}`;
    }

    returnAttributesObject = () => {
        // builds {key: value} pair where {attribute: first attribute value}
        const attributesObj = this.props.attributes.length > 0 ? {
            ...Object.assign(
                ...this.props.attributes.map(
                    item => ({[item.name]: item.items[0].value})
                )
            )
        } : null;

        return attributesObj;
    }

    handleAttributeSelect = (attributeName, attributeValue) => {
        this.setState(() => ({
            [attributeName]: attributeValue
        }));
    }

    handleCartClick = () => {
        const { 
            id,
            brand,
            name,
            prices,
            gallery,
            attributes 
        } = this.props;
        const newItem = {
            id,
            brand,
            name,
            prices,
            gallery,
            attributes,
            selectedAttributes: {...this.state}
        }

        this.props.addToCart(newItem);
    }

    render(){
        const price = this.returnSelectedCurrency();

        return(
            <Styles>
                <div>
                    <div className="product-brand">{this.props.brand}</div>
                    <div>{this.props.name}</div>
                </div>
                {this.props.attributes.map(
                    (item, index) => 
                        <Attributes attribute={item} key={index} onClick={this.handleAttributeSelect}/>
                )}
                <div>
                    <div className="fragment-title">PRICE:</div>
                    <div className="price-value">{price}</div>
                </div>
                <button className="btn-cart" onClick={this.handleCartClick}>ADD TO CART</button>
                <div className="description" dangerouslySetInnerHTML={this.setHTML()}/>
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    defaultCurrency: state.currency.defaultCurrency
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (newItem) => dispatch(addItemToCart(newItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
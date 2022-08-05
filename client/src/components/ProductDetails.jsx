import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItemToCart } from "../store/reducers/cartSlice";
import Attributes from "./Attribute";
import ProductTitle from "./ProductTitle";

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

        :active{
            background-color: var(--color-smooth-green-dark);
        }
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
            attributesArray: new Array(this.props.attributes.length).fill(0)
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

    handleAttributeSelect = (selectedOption, attributeIdx) => {
        const { attributesArray } = this.state;
        attributesArray[attributeIdx] = selectedOption;
        
        this.setState(() => ({
            attributesArray: attributesArray
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
            selectedAttributes: this.state.attributesArray,
            amount: 1
        }

        this.props.addToCart(newItem);
    }

    render(){
        const price = this.returnSelectedCurrency();

        return(
            <Styles>
                <div>
                    <ProductTitle size="1.875rem" weight="600">
                        {this.props.brand}
                    </ProductTitle>
                    <ProductTitle>
                        {this.props.name}
                    </ProductTitle>
                </div>
                {this.props.attributes.map(
                    (item, index) => 
                        <Attributes attribute={item} key={index} refIndex={index} onClick={this.handleAttributeSelect}/>
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
import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import Attribute from "../Attribute";
import Title from "../Title";
import Price from "../Price";

const Styles = styled.div`
    font-size: 1.875rem;
    font-weight: 400;
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

    handleAttributeSelect = (selectedOption, attributeIdx) => {
        const selections = [...this.state.attributesArray];
        selections[attributeIdx] = selectedOption;

        this.setState(() => ({
            attributesArray: selections
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
        return(
            <Styles>
                <div>
                    <Title size="1.875rem" weight="600">
                        {this.props.brand}
                    </Title>
                    <Title>
                        {this.props.name}
                    </Title>
                </div>
                {this.props.attributes.map(
                    (item, index) => 
                        <Attribute attribute={item} key={index} refIndex={index} onClick={this.handleAttributeSelect}/>
                )}
                <div>
                    <div className="fragment-title">PRICE:</div>
                    <Price 
                        priceList={this.props.prices}
                        size="1.5rem"
                        weight="700"
                    />
                </div>
                <button className="btn-cart" onClick={this.handleCartClick}>ADD TO CART</button>
                <div className="description" dangerouslySetInnerHTML={this.setHTML()}/>
            </Styles>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (newItem) => dispatch(addItemToCart(newItem))
});

export default connect(null, mapDispatchToProps)(ProductDetails);
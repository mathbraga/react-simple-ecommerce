import React, { PureComponent } from "react";
import ProductContainer from "../containers/ProductContainer";

class Product extends PureComponent {
    render(){
        return(
            <ProductContainer>
                <div className="product-image">
                    <img src={this.props.data.gallery[0]} alt="Product images" />
                </div>
                <div className="product-name">{`${this.props.data.brand} ${this.props.data.name}`}</div>
                <div className="product-price">{`${this.props.data.prices[0].currency.symbol}${this.props.data.prices[0].amount}`}</div>
            </ProductContainer>
        )
    }
}

export default Product;

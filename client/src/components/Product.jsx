import React, { PureComponent } from "react";
import ProductContainer from "../containers/ProductContainer";

class Product extends PureComponent {
    isInStock = () => {
        return this.props.data.inStock;
    }

    render(){
        return(
            <ProductContainer className={this.isInStock() ? "" : "no-stock"}>
                <div className="product-image">
                    {this.isInStock() ? null : <div className="no-stock-notice">OUT OF STOCK</div>}
                    <img src={this.props.data.gallery[0]} alt="Product images" />
                </div>
                <div className="product-name">{`${this.props.data.brand} ${this.props.data.name}`}</div>
                <div className="product-price">{`${this.props.data.prices[0].currency.symbol}${this.props.data.prices[0].amount}`}</div>
            </ProductContainer>
        )
    }
}

export default Product;

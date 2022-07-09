import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ProductContainer from "../containers/ProductContainer";

class Product extends PureComponent {
    isInStock = () => {
        return this.props.data.inStock;
    }

    returnSelectedCurrency = () => {
        const price = this.props.data.prices.filter(
            item => item.currency.symbol === this.props.defaultCurrency
        )

        return (
            <div className="product-price">
                {`${price[0].currency.symbol}${price[0].amount}`}
            </div>
        )
    }

    render(){
        return(
            <ProductContainer className={this.isInStock() ? "" : "no-stock"}>
                <div className="product-image">
                    {this.isInStock() ? null : <div className="no-stock-notice">OUT OF STOCK</div>}
                    <img src={this.props.data.gallery[0]} alt="Product images" />
                </div>
                <div className="product-name">{`${this.props.data.brand} ${this.props.data.name}`}</div>
                {this.returnSelectedCurrency()}
            </ProductContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    defaultCurrency: state.currency.defaultCurrency
})

export default connect(mapStateToProps)(Product);

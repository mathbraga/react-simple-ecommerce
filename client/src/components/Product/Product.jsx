import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductContainer from "../../containers/ProductContainer";
import AddToCartBadge from "../AddToCartBadge";
import { addItemToCart } from "../../store/reducers/cartSlice";
import Price from "../Price";

class Product extends PureComponent {
    isInStock = () => {
        return this.props.data.inStock;
    }

    handleCartClick = (event) => {
        event.preventDefault();

        const { 
            id,
            brand,
            name,
            prices,
            gallery,
            attributes 
        } = this.props.data;
        const newItem = {
            id,
            brand,
            name,
            prices,
            gallery,
            attributes,
            selectedAttributes: [],
            amount: 1
        }

        this.props.addToCart(newItem);
    }

    render(){
        return(
            <Link
                style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    pointerEvents: this.isInStock() ? 'auto' : 'none' }}
                to={`/${this.props.data.category}/${this.props.data.id}`}
            >
                <ProductContainer className={this.isInStock() ? "" : "no-stock"}>
                        <div className="product-image">
                            {this.isInStock() ? null : <div className="no-stock-notice">OUT OF STOCK</div>}
                            <img className="image-box" src={this.props.data.gallery[0]} alt="Product images" />
                            {this.props.data.attributes.length ? 
                                null : <AddToCartBadge className="cart-btn" onClick={this.handleCartClick} />}
                        </div>
                        <div className="product-name">
                            {`${this.props.data.brand} ${this.props.data.name}`}
                        </div>
                        <div className="product-price">
                            <Price size="1.125rem" weight="500" priceList={this.props.data.prices} />
                        </div>
                </ProductContainer>
            </Link>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (newItem) => dispatch(addItemToCart(newItem))
});

export default connect(null, mapDispatchToProps)(Product);

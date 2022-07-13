import React, { PureComponent } from "react";
import { client, Query, Field } from "@tilework/opus";
import PropTypes from "prop-types";
import Product from "./Product";
import ProductsGrid from "../containers/ProductsGrid";

class ProductPageContent extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            products: []
        }
    }

    handleState = (newState) => {
        this.setState(() => {
            return {products: newState}
        });
    }

    prepareQuery = () => {
        const attributes = new Field('attributes', true).addField('name');
        const currencyFields = ['label', 'symbol'];
        const currency = new Field('currency', true).addFieldList(currencyFields);
        const priceFields = [currency, 'amount'];
        const prices = new Field('prices', true).addFieldList(priceFields);
        const productFields = ['id', 'name', 'inStock', 'gallery', 'category',
            attributes, prices, 'brand'];
        const products = new Field('products', true).addFieldList(productFields);
        const query = new Query('category', true)
            .addArgument('input', 'CategoryInput', {'title': this.props.categoryName})
            .addField(products);

        return query;
    }

    queryCategoriesNames = async () => {
        const query = this.prepareQuery();
        const result = await client.post(query);
        this.handleState(result);
    }

    componentDidMount = () => {
        this.queryCategoriesNames();
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.categoryName !== this.props.categoryName)
            this.queryCategoriesNames();
    }

    render(){
        return(
            <ProductsGrid>
                {this.state.products.category ?
                    this.state.products.category.products.map(
                        (item, index) => <Product key={index} data={item} />
                    )
                    :
                    null}
            </ProductsGrid>
        );
    }
}

ProductPageContent.propTypes = {
    categoryName: PropTypes.string.isRequired
};

export default ProductPageContent;

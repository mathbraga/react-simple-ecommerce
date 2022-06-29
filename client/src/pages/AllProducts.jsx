import React, { PureComponent } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../containers/PageContainer";
import { client, Query, Field } from "@tilework/opus";

class AllProducts extends PureComponent {
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
        const items = new Field('items', true).addField('value');
        const attributeFields = [items, 'name', 'type'];
        const attributes = new Field('attributes', true).addFieldList(attributeFields);
        const currencyFields = ['label', 'symbol'];
        const currency = new Field('currency', true).addFieldList(currencyFields);
        const priceFields = [currency, 'amount'];
        const prices = new Field('prices', true).addFieldList(priceFields);
        const productFields = ['id', 'name', 'inStock', 'gallery', 'description', 
        'category', attributes, prices, 'brand'];
        const products = new Field('products', true).addFieldList(productFields);
        const query = new Query('category', true)
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

    render(){
        return(
            <PageContainer>
                <PageTitle>All</PageTitle>
                {this.state.products['category'] ? 
                    this.state.products['category'].products
                        .map((item, index) => <div key={index}>{item.name}</div>) 
                    : 
                    null
                }
                {console.log(this.state.products['category'])}
            </PageContainer>
        );
    }
}

export default AllProducts;

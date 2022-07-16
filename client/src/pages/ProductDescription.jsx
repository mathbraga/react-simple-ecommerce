import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import { client, Query, Field } from "@tilework/opus";
import ProductDescriptionContainer from "../containers/ProductDescriptionContainer";

function withParams(Component){
    return props => <Component {...props} params={useParams()} />;
}

class ProductDescription extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    handleState = (newState) => {
        this.setState(() => {
            return {data: newState}
        });
    }

    prepareQuery = () => {
        const currencyFields = ['label', 'symbol'];
        const currency = new Field('currency', true)
            .addFieldList(currencyFields);
        const pricesFields = [currency, 'amount']
        const prices = new Field('prices', true)
            .addFieldList(pricesFields)
        const itemsFields = ['displayValue', 'value']
        const items = new Field('items', true)
            .addFieldList(itemsFields);
        const attributesFields = ['name', 'type', items];
        const attributes = new Field('attributes', true)
            .addFieldList(attributesFields);
        const productFields = ['name', 'inStock', 'gallery', 'description', attributes, prices, 'brand'];
        const query = new Query('product', true)
            .addArgument('id', 'String!', this.props.params.productId)
            .addFieldList(productFields);

        return query;
    }

    queryProductData = async () => {
        const query = this.prepareQuery();
        const result = await client.post(query);
        this.handleState(result);
    }

    componentDidMount = () => {
        this.queryProductData();
    }

    render(){
        return(
            <PageContainer>
                {this.state.data.product ?
                    <ProductDescriptionContainer>
                        <div className="section-images">
                            <div className="image-list">
                                {this.state.data.product.gallery.slice(1).map(
                                    (item, index) => <img key={index} src={item} alt={index} />
                                )}
                            </div>
                            <div className="image-main">
                                <img src={this.state.data.product.gallery[0]} alt="Main" />
                            </div>
                        </div>
                        <div className="section-description">
                            <div className="item-brand">{this.state.data.product.brand}</div>
                            <div>{this.state.data.product.name}</div>
                        </div>
                    </ProductDescriptionContainer>
                    : null
                }
            </PageContainer>
        );
    }
}

export default withParams(ProductDescription);

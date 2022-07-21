import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import { client, Query, Field } from "@tilework/opus";
import ProductDescriptionContainer from "../containers/ProductDescriptionContainer";
import ImageSlider from "../components/ImageSlider";

function withParams(Component){
    return props => <Component {...props} params={useParams()} />;
}

class ProductDescription extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            selectedImage: 0
        }
    }

    updateProductData = (newData) => {
        this.setState(() => {
            return { data: newData }
        });
    }

    handleImgSelect = (index) => {
        this.setState(() => {
            return { selectedImage: index }
        })
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
        this.updateProductData(result);
    }

    componentDidMount = () => {
        this.queryProductData();
    }

    render(){
        return(
            <PageContainer>
                {this.state.data.product ?
                    <ProductDescriptionContainer hasGallery={this.state.data.product.gallery.length > 1}>
                        <ImageSlider images={this.state.data.product.gallery} imageSelector={this.handleImgSelect} />
                        <div className="image-main">
                            <img src={this.state.data.product.gallery[this.state.selectedImage]} alt="Main" />
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

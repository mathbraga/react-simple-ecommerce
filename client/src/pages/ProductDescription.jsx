import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import { client, Query, Field } from "@tilework/opus";
import ProductDescriptionContainer from "../containers/ProductDescriptionContainer";
import ImageSlider from "../components/ImageSlider";
import MainImage from "../components/MainImage";
import ProductDetails from "../components/ProductDetails";
import arrowUp from "../assets/icons/arrow-up.svg";
import arrowDown from "../assets/icons/arrow-down.svg";

function withParams(Component){
    return props => <Component {...props} params={useParams()} />;
}

class ProductDescription extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            selectedImage: 0,
            slideLimiter: 0
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

    handleArrowClass = (limit) => {
        if(this.state.slideLimiter === limit){
            return "slider-arrow-disabled";
        }

        return "slider-arrow";
    };

    handleClick = (offset) => {
        this.setState((state) => {
            return { slideLimiter: state.slideLimiter + offset }
        })
    }

    render(){
        const productDetails = 
            this.state.data.product ? 
            {
                brand: this.state.data.product.brand,
                name: this.state.data.product.name,
                description: this.state.data.product.description
            } : {}

        return(
            <PageContainer>
                {this.state.data.product ?
                    <ProductDescriptionContainer hasGallery={this.state.data.product.gallery.length > 1}>
                        {this.state.data.product.gallery.length > 1 ?
                        <div>
                            {this.state.data.product.gallery.length > 3 ?
                            <div 
                                className={this.handleArrowClass(0)} 
                                onClick={() => this.handleClick(-1)}
                            >
                                <img src={arrowUp} alt="Arrow up" />
                            </div> : null}
                            <ImageSlider 
                                offset={this.state.slideLimiter} 
                                images={this.state.data.product.gallery} 
                                imageSelector={this.handleImgSelect} 
                            />
                            {this.state.data.product.gallery.length > 3 ?
                            <div 
                                className={this.handleArrowClass(this.state.data.product.gallery.length - 3)}
                                onClick={() => this.handleClick(1)}
                            >
                                <img src={arrowDown} alt="Arrow down" />
                            </div> : null}
                        </div> : null}
                        <MainImage image={this.state.data.product.gallery[this.state.selectedImage]} />
                        <ProductDetails {...productDetails} />
                    </ProductDescriptionContainer>
                    : null
                }
            </PageContainer>
        );
    }
}

export default withParams(ProductDescription);

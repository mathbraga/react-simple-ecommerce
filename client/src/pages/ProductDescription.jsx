import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import { client, Query, Field } from "@tilework/opus";
import ProductDescriptionContainer from "../containers/ProductDescriptionContainer";
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
            carouselReference: 1
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

    handleImgListDisplay = (index) => {
        const galleryLength = this.state.data.product.gallery.length;
        const isIndexInInterval = 
            index <= this.state.carouselReference+1 && index >= this.state.carouselReference-1;

        if(galleryLength <= 3)
            return true;

        return isIndexInInterval;
    }

    handleClick = (offset) => {
        const galleryLength = this.state.data.product.gallery.length;
        const currentReference = this.state.carouselReference;
        const finalReference = 
            currentReference + offset < 1 ? 
            1 :
            (currentReference + offset > galleryLength-2 ? 
                galleryLength-2 : currentReference + offset);

        this.setState(() => {
            return { carouselReference: finalReference }
        });
    }

    handleArrowClass = (limit) => {
        const galleryLength = this.state.data.product.gallery.length;

        if(galleryLength <= 3){
            return "slider-arrow-disabled";
        }

        return this.state.carouselReference === limit ? "slider-arrow-disabled" : "slider-arrow";
    }

    render(){
        return(
            <PageContainer>
                {this.state.data.product ?
                    <ProductDescriptionContainer hasGallery={this.state.data.product.gallery.length > 1}>
                        {this.state.data.product.gallery.length > 1 ?
                            <div>
                                <div 
                                    className={this.handleArrowClass(1)} 
                                    onClick={() => this.handleClick(-1)}
                                >
                                    <img src={arrowUp} alt="Arrow up" />
                                </div>
                                <div className="image-list">
                                    {this.state.data.product.gallery.map(
                                        (item, index) =>
                                            this.handleImgListDisplay(index) ?
                                            <div key={index} onClick={() => this.handleImgSelect(index)}>
                                                <img src={item} alt={index} />
                                            </div> : null
                                    )}
                                </div>
                                <div 
                                    className={this.handleArrowClass(this.state.data.product.gallery.length-2)} 
                                    onClick={() => this.handleClick(1)}
                                >
                                    <img src={arrowDown} alt="Arrow down" />
                                </div>
                            </div> : null}
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

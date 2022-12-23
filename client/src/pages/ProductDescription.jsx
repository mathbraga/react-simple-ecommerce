import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import { client, Query, Field } from "@tilework/opus";
import ProductDescriptionContainer from "../containers/ProductDescriptionContainer";
import MainImage from "../components/MainImage";
import ProductDetails from "../components/ProductDetails";
import ImageSelector from "../components/ImageSelector";
import styled from "styled-components";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const OutOfStock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  font-size: 1.5rem;
  font-weight: bold;

  div {
    font-size: 1rem;
    font-weight: normal;
  }
`;

class ProductDescription extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedImage: 0,
    };
  }

  updateProductData = (newData) => {
    this.setState(() => {
      return { data: newData };
    });
  };

  handleImgSelect = (index) => {
    this.setState(() => {
      return { selectedImage: index };
    });
  };

  prepareQuery = () => {
    const currencyFields = ["label", "symbol"];
    const currency = new Field("currency", true).addFieldList(currencyFields);
    const pricesFields = [currency, "amount"];
    const prices = new Field("prices", true).addFieldList(pricesFields);
    const itemsFields = ["displayValue", "value"];
    const items = new Field("items", true).addFieldList(itemsFields);
    const attributesFields = ["name", "type", items];
    const attributes = new Field("attributes", true).addFieldList(
      attributesFields
    );
    const productFields = [
      "name",
      "inStock",
      "gallery",
      "description",
      attributes,
      prices,
      "brand",
    ];
    const query = new Query("product", true)
      .addArgument("id", "String!", this.props.params.productId)
      .addFieldList(productFields);

    return query;
  };

  queryProductData = async () => {
    const query = this.prepareQuery();
    const result = await client.post(query);
    this.updateProductData(result);
  };

  componentDidMount = () => {
    this.queryProductData();
  };

  render() {
    const productDetails = this.state.data.product
      ? {
          id: this.props.params.productId,
          brand: this.state.data.product.brand,
          name: this.state.data.product.name,
          description: this.state.data.product.description,
          prices: this.state.data.product.prices,
          attributes: this.state.data.product.attributes,
          gallery: this.state.data.product.gallery,
        }
      : {};

    return (
      <PageContainer>
        {this.state.data.product ? (
          this.state.data.product.inStock ? (
            <ProductDescriptionContainer
              hasGallery={this.state.data.product.gallery.length > 1}
            >
              {this.state.data.product.gallery.length > 1 ? (
                <ImageSelector
                  gallery={this.state.data.product.gallery}
                  imageSelector={this.handleImgSelect}
                />
              ) : null}
              <MainImage
                image={
                  this.state.data.product.gallery[this.state.selectedImage]
                }
              />
              <ProductDetails {...productDetails} />
            </ProductDescriptionContainer>
          ) : (
            <OutOfStock>
              Sorry, this product is out of stock.
              <div>Please go back to the home page.</div>
            </OutOfStock>
          )
        ) : null}
      </PageContainer>
    );
  }
}

export default withParams(ProductDescription);

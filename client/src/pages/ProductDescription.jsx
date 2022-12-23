import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import ProductDescriptionContainer from "../containers/ProductDescriptionContainer";
import MainImage from "../components/MainImage";
import ProductDetails from "../components/ProductDetails";
import ImageSelector from "../components/ImageSelector";
import styled from "styled-components";
import DataContext from "../helpers/DataContext";

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
      selectedImage: 0,
    };
  }

  filterByCategory = (productsArray) => {
    const result = productsArray
      ? productsArray.find(
          (products) => products.name === this.props.params.category
        )
      : { products: [] };
    const { products } = result;
    const singleProduct = products.find(
      (product) => product.id === this.props.params.productId
    );

    return singleProduct;
  };

  handleImgSelect = (index) => {
    this.setState(() => {
      return { selectedImage: index };
    });
  };

  render() {
    const product = this.filterByCategory(this.context.products);
    const productDetails = product
      ? {
          id: this.props.params.productId,
          brand: product.brand,
          name: product.name,
          description: product.description,
          prices: product.prices,
          attributes: product.attributes,
          gallery: product.gallery,
        }
      : {};

    return (
      <PageContainer>
        {product ? (
          product.inStock ? (
            <ProductDescriptionContainer
              hasGallery={product.gallery.length > 1}
            >
              {product.gallery.length > 1 ? (
                <ImageSelector
                  gallery={product.gallery}
                  imageSelector={this.handleImgSelect}
                />
              ) : null}
              <MainImage image={product.gallery[this.state.selectedImage]} />
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
ProductDescription.contextType = DataContext;

export default withParams(ProductDescription);

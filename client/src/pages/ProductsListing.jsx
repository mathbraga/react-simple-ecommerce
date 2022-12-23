import React, { PureComponent } from "react";
import Title from "../components/Title";
import PageContainer from "../containers/PageContainer";
import ProductPageContent from "../components/ProductPageContent";
import DataContext from "../helpers/DataContext";
import PropTypes from "prop-types";

class ProductsListing extends PureComponent {
  filterByCategory = (productsArray) => {
    const result = productsArray
      ? productsArray.find((products) => products.name === this.props.category)
      : { products: [] };
    const { products } = result;

    return products;
  };

  render() {
    const products = this.filterByCategory(this.context.products);

    return (
      <PageContainer>
        <Title size="2.625rem" weight="400" bottomSpace="100px">
          {this.props.pageTitle}
        </Title>
        <ProductPageContent products={products} />
      </PageContainer>
    );
  }
}
ProductsListing.contextType = DataContext;

ProductsListing.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductsListing;

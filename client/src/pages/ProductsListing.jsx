import React, { PureComponent } from "react";
import Title from "../components/Title";
import PageContainer from "../containers/PageContainer";
import ProductPageContent from "../components/ProductPageContent";
import DataContext from "../helpers/DataContext";

class ProductsListing extends PureComponent {
  filterByCategory = (productsArray) => {
    const result = productsArray
      ? productsArray.filter(
          (products) => products.name === this.props.category
        )
      : [{ products: [] }];
    const { products } = result[0];

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

export default ProductsListing;

import React, { PureComponent } from "react";
import Product from "../Product";
import ProductsGrid from "../../containers/ProductsGrid";

class ProductPageContent extends PureComponent {
  render() {
    return (
      <ProductsGrid>
        {this.props.products.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </ProductsGrid>
    );
  }
}

export default ProductPageContent;

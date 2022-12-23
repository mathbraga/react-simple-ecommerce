import React, { PureComponent } from "react";
import Routing from "./Routing";
import queryAllProducts from "./helpers/queryAllProducts";
import DataContext from "./helpers/DataContext";

class PreDataLoader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      allProducts: {},
    };
  }

  handleStateUpdate = (allProducts) => {
    this.setState({ allProducts });
  };

  allProducts = async () => {
    const productsList = await queryAllProducts();
    this.handleStateUpdate(productsList);
  };

  componentDidMount = () => {
    this.allProducts();
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          products: this.state.allProducts.categories,
        }}
      >
        <Routing />
      </DataContext.Provider>
    );
  }
}

export default PreDataLoader;

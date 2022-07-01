import React, { PureComponent } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../containers/PageContainer";
import ProductPageContent from "../components/ProductPageContent";

class ProductsListing extends PureComponent {
    render(){
        return(
            <PageContainer>
                <PageTitle>{this.props.pageTitle}</PageTitle>
                <ProductPageContent categoryName={this.props.category} />
            </PageContainer>
        );
    }
}

export default ProductsListing;

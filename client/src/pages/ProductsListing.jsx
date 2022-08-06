import React, { PureComponent } from "react";
import Title from "../components/Title";
import PageContainer from "../containers/PageContainer";
import ProductPageContent from "../components/ProductPageContent";

class ProductsListing extends PureComponent {
    render(){
        return(
            <PageContainer>
                <Title size="2.625rem" weight="400" bottomSpace="100px">
                    {this.props.pageTitle}
                </Title>
                <ProductPageContent categoryName={this.props.category} />
            </PageContainer>
        );
    }
}

export default ProductsListing;

import React, { PureComponent } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../containers/PageContainer";
import ProductPageContent from "../components/ProductPageContent";

class AllProducts extends PureComponent {
    render(){
        return(
            <PageContainer>
                <PageTitle>{"All"}</PageTitle>
                <ProductPageContent categoryName="all" />
            </PageContainer>
        );
    }
}

export default AllProducts;

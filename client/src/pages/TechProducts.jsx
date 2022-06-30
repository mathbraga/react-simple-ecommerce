import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import PageTitle from "../components/PageTitle";
import ProductPageContent from "../components/ProductPageContent";

class TechProducts extends PureComponent {
    render(){
        return(
            <PageContainer>
                <PageTitle>{"Tech"}</PageTitle>
                <ProductPageContent categoryName="tech" />
            </PageContainer>
        );
    }
}

export default TechProducts;

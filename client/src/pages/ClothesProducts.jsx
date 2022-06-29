import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import PageTitle from "../components/PageTitle";
import ProductPageContent from "../components/ProductPageContent";

class ClothesProducts extends PureComponent {
    render(){
        return(
            <PageContainer>
                <PageTitle>{"Clothes"}</PageTitle>
                <ProductPageContent category="clothes" />
            </PageContainer>
        );
    }
}

export default ClothesProducts;

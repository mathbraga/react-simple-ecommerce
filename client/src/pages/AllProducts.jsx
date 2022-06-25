import React, { PureComponent } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../containers/PageContainer";

class AllProducts extends PureComponent {
    render(){
        return(
            <PageContainer>
                <PageTitle>All</PageTitle>
            </PageContainer>
        );
    }
}

export default AllProducts;

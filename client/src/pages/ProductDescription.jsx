import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";

function withParams(Component){
    return props => <Component {...props} params={useParams()} />;
}

class ProductDescription extends PureComponent {
    render(){
        return(
            <PageContainer>
                <div>{this.props.params.productId}</div>
            </PageContainer>
        );
    }
}

export default withParams(ProductDescription);

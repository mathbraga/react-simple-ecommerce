import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import { useParams } from "react-router-dom";
import { client, Query, Field } from "@tilework/opus";

function withParams(Component){
    return props => <Component {...props} params={useParams()} />;
}

class ProductDescription extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    handleState = (newState) => {
        this.setState(() => {
            return {data: newState}
        });
    }

    prepareQuery = () => {
        const query = new Query('product', true)
            .addArgument('id', 'String!', this.props.params.productId)
            .addFieldList(['name', 'brand']);

        return query;
    }

    queryProductData = async () => {
        const query = this.prepareQuery();
        const result = await client.post(query);
        this.handleState(result);
    }

    componentDidMount = () => {
        this.queryProductData();
    }

    render(){
        return(
            <>
                {this.state.data.product ?
                    <PageContainer>
                        <div>{this.state.data.product.brand}</div>
                        <div>{this.state.data.product.name}</div>
                    </PageContainer>
                    : null
                }
            </>
        );
    }
}

export default withParams(ProductDescription);

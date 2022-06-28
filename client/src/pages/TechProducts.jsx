import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import PageTitle from "../components/PageTitle";
import { client, Query, Field } from "@tilework/opus";

class TechProducts extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            products: []
        }
    }

    handleState = (newState) => {
        this.setState(() => {
            return {products: newState}
        });
    }

    queryCategoriesNames = async () => {
        const productFields = ['id', 'name', 'category'];
        const query = new Query('category', true)
            .addField(new Field('products', true)
                .addFieldList(productFields)
            );
        const result = await client.post(query);
        this.handleState(result);
    }

    componentDidMount = () => {
        this.queryCategoriesNames();
    }

    render(){
        return(
            <PageContainer>
                <PageTitle>Tech</PageTitle>
                {this.state.products['category'] ? 
                    this.state.products['category'].products
                        .map((item, index) => item.category === "tech" ? <div key={index}>{item.name}</div> : null) 
                    : 
                    null
                }
            </PageContainer>
        );
    }
}

export default TechProducts;

import React, { PureComponent } from "react";
import PageContainer from "../containers/PageContainer";
import PageTitle from "../components/PageTitle";
import { client, Query, Field } from "@tilework/opus";

class ClothesProducts extends PureComponent {
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
                <PageTitle>Clothes</PageTitle>
                {this.state.products['category'] ? 
                    this.state.products['category'].products
                        .map((item, index) => item.category === "clothes" ? <div key={index}>{item.name}</div> : null) 
                    : 
                    null
                }
            </PageContainer>
        );
    }
}

export default ClothesProducts;

import React, { PureComponent } from "react";
import PageTitle from "../components/PageTitle";
import PageContainer from "../containers/PageContainer";
import { client, Query } from "@tilework/opus";

class AllProducts extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            categories: []
        }
    }

    handleState = (newState) => {
        this.setState(() => {
            return {categories: newState}
        });
    }

    queryCategoriesNames = async () => {
        const query = new Query('categories', true)
            .addField('name');
        const result = await client.post(query);
        this.handleState(result);
    }

    componentDidMount = () => {
        this.queryCategoriesNames();
    }

    render(){
        return(
            <PageContainer>
                <PageTitle>All</PageTitle>
                {this.state.categories['categories'] ? 
                    this.state.categories['categories']
                        .map((item, index) => <div key={index}>{item.name}</div>) 
                    : 
                    null
                }
            </PageContainer>
        );
    }
}

export default AllProducts;

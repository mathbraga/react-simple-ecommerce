import React, { PureComponent } from "react";
import Routing from "./Routing";
import { client } from "@tilework/opus";

client.setEndpoint("https://gql-dummy-server.vercel.app/api/graphql");

class App extends PureComponent {
    render(){
        return(
            <Routing />
        );
    }
}

export default App;

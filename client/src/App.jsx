import React, { PureComponent } from "react";
import Routing from "./Routing";
import { client } from "@tilework/opus";

client.setEndpoint("https://react-project-gql-server.herokuapp.com/");

class App extends PureComponent {
    render(){
        return(
            <Routing />
        );
    }
}

export default App;

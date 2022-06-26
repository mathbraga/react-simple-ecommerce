import React, { PureComponent } from "react";
import Routing from "./Routing";
import { client } from "@tilework/opus";

client.setEndpoint("http://localhost:4000/");

class App extends PureComponent {
    render(){
        return(
            <Routing />
        );
    }
}

export default App;

import React, { PureComponent } from "react";
import { client } from "@tilework/opus";
import PreDataLoader from "./PreDataLoader";

client.setEndpoint(process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : process.env.API_ENDPOINT);

class App extends PureComponent {
    render(){
        return(
            <PreDataLoader />
        );
    }
}

export default App;

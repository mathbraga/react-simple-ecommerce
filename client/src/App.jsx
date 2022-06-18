import React, { PureComponent } from "react";
import ContentContainer from "./containers/ContentContainer";
import Header from "./components/Header";

class App extends PureComponent {
    render(){
        return(
            <div>
                <Header>header</Header>
                <ContentContainer>content</ContentContainer>
            </div>
        );
    }
}

export default App;

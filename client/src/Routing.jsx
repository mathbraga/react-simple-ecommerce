import React, { PureComponent } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Header from "./components/Header";

class Routing extends PureComponent {
    render(){
        return(
            <>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="women" element={<div>women</div>} />
                        <Route path="men" element={<div>men</div>} />
                        <Route path="kids" element={<div>kids</div>} />
                        <Route path="*" element={<Navigate to="women" />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default Routing;

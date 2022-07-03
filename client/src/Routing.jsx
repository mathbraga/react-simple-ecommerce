import React, { PureComponent } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Header from "./components/Header";
import FullAppContainer from "./containers/FullAppContainer";
import ProductsListing from "./pages/ProductsListing";

class Routing extends PureComponent {
    render(){
        return(
            <FullAppContainer>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="all" element={<ProductsListing pageTitle="All" category="all" />} />
                        <Route path="tech" element={<ProductsListing pageTitle="Tech" category="tech" />} />
                        <Route path="clothes" element={<ProductsListing pageTitle="Clothes" category="clothes" />} />
                        <Route path="*" element={<Navigate to="all" />} />
                    </Routes>
                </BrowserRouter>
            </FullAppContainer>
        );
    }
}

export default Routing;

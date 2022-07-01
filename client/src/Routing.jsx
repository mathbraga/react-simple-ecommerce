import React, { PureComponent } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Header from "./components/Header";
import AllProducts from "./pages/AllProducts";
import TechProducts from "./pages/TechProducts";
import ClothesProducts from "./pages/ClothesProducts";

class Routing extends PureComponent {
    render(){
        return(
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="all" element={<AllProducts pageTitle="All" category="all" />} />
                        <Route path="tech" element={<TechProducts pageTitle="Tech" category="tech" />} />
                        <Route path="clothes" element={<ClothesProducts pageTitle="Clothes" category="clothes" />} />
                        <Route path="*" element={<Navigate to="all" />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default Routing;

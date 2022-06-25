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
                        <Route path="all" element={<AllProducts />} />
                        <Route path="tech" element={<TechProducts />} />
                        <Route path="clothes" element={<ClothesProducts />} />
                        <Route path="*" element={<Navigate to="all" />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default Routing;

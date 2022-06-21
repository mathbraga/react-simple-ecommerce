import React, { PureComponent } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Header from "./components/Header";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";

class Routing extends PureComponent {
    render(){
        return(
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="women" element={<Women />} />
                        <Route path="men" element={<Men />} />
                        <Route path="kids" element={<Kids />} />
                        <Route path="*" element={<Navigate to="women" />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default Routing;

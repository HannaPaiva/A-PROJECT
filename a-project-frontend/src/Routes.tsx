import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  import { Cart } from "./pages/Cart";
  import { Catalog } from "./pages/Catalog";
    
export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/Cart" element={<Catalog />} />
                <Route path="/Catalog" element={<Cart />} />
            </Routes>
        </Router>
    )
}

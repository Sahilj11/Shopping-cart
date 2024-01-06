import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ProductPage } from "./components/ProductPage";
import { NotFound } from "./components/NotFound";
import { ProductDesc } from "./components/ProductDesc";
function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/productdetail/:productid" element={<ProductDesc />}></Route>
                <Route path="/cart" element={<ProductPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

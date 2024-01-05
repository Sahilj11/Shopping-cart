import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ProductPage } from "./components/ProductPage";
import { NotFound } from "./components/NotFound";
function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/cart" element={<ProductPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

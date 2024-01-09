import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ProductPage } from "./components/ProductPage";
import { NotFound } from "./components/NotFound";
import { ProductDesc } from "./components/ProductDesc";
import { CartPage } from "./components/CartPage";
import { useProductAPI } from "./components/useAPIs";
import { useState } from "react";
import { useEffect } from "react";
function App() {
    const { data, loading, error } = useProductAPI(
        "https://fakestoreapi.com/products?limit=8",
    );
    // how to manage state from here itself
    const [cart, setCart] = useState([]);
    const [numberOfItem, setNumberItem] = useState(0);
    useEffect(()=>{
        setNumberItem(cart.length)
    },[cart])
    const addingProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    const deletingProduct = (product) => {
        const newCart = cart.filter((el)=> el.id != product.id);
        setCart(newCart);
    };
    return (
        <>
            <NavigationBar totalItem={numberOfItem}/>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductPage
                            data={data}
                            loading={loading}
                            error={error}
                            addProduct={addingProduct}
                        />
                    }
                />
                <Route
                    path="/productdetail/:productid"
                    element={<ProductDesc data={data} loading={loading} error={error} addingProduct={addingProduct}/>}
                ></Route>
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            data={data}
                            loading={loading}
                            error={error}
                            cartValue={cart}
                            deleteProduct={deletingProduct}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

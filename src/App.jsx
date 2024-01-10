import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ProductPage } from "./components/ProductPage";
import { NotFound } from "./components/NotFound";
import { ProductDesc } from "./components/ProductDesc";
import { CartPage } from "./components/CartPage";
import { useProductAPI } from "./components/useAPIs";
import { useReducer } from "react";

const ACTIONS = {
    ADD_ITEM: "add-product",
    REMOVE_ITEM: "remove-item",
};
function App() {
    const { data, loading, error } = useProductAPI(
        "https://fakestoreapi.com/products?limit=8",
    );

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.ADD_ITEM:
                return {
                    cart: [...state.cart, newItem(action.payload.product)],
                    count: state.cart.length + 1,
                    cartValue: state.cart.reduce((accum, cv) => accum + cv.price, 0),
                };
            case ACTIONS.REMOVE_ITEM:
                return {
                    cart: state.cart.filter((el) => el.id != action.payload.product.id),
                    count: state.cart.length - 1,
                    cartValue: state.cart.reduce((accum, cv) => accum + cv.price, 0),
                };
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        cart: [],
        count: 0,
        cartValue: 0,
    });

    const addingProduct = (product, quantity = 1) => {
        dispatch({
            type: ACTIONS.ADD_ITEM,
            payload: { product: product, quantity: quantity },
        });
    };

    function deletingProduct(product) {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { product: product } });
    }

    function newItem(productAdded, quantity = 1) {
        return { ...productAdded, quantity: quantity };
    }

    return (
        <>
            <NavigationBar totalItem={state.count} />
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
                    element={
                        <ProductDesc
                            data={data}
                            loading={loading}
                            error={error}
                            addingProduct={addingProduct}
                        />
                    }
                ></Route>
                <Route
                    path="/cart"
                    element={
                        <CartPage
                            data={data}
                            loading={loading}
                            error={error}
                            deleteProduct={deletingProduct}
                            cart={state}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

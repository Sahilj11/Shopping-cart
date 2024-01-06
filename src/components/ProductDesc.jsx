import { useParams } from "react-router-dom";
import { useProductAPI } from "./useAPIs";

export function ProductDesc() {
    const { data, loading, error } = useProductAPI(
        "https://fakestoreapi.com/products?limit=12",
    );
    const { productid } = useParams();
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occurred</h2>;
    const prdData = data.find((el) => el.id == productid);
    return (
        <div>
            <img src={prdData.image} alt="Product Image" height="400px" width="400px" />
            <p>{prdData.title}</p>
            <p>{prdData.description}</p>
            <p>{prdData.price}</p>
            <button>Add more quantity</button>
        </div>
    );
}

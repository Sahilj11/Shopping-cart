import { useProductAPI } from "./useAPIs";
import { Product } from "./Product";
export function ProductPage() {
    const { data, loading, error } = useProductAPI(
        "https://fakestoreapi.com/products?limit=5",
    );
    console.log(data);
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occured</h2>;
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyItems: "center",
                    height: "100vh",
                }}
            >
                {data.map((el) => (
                    <Product
                        key={el.id}
                        title={el.title}
                        price={el.price}
                        imgUrl={el.image}
                    />
                ))}
            </div>
        </>
    );
}

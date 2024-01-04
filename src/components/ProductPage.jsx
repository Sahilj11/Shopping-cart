import { useProductAPI } from "./useAPIs";
import { Product } from "./Product";
export function ProductPage() {
    const { data, loading, error } = useProductAPI(
        "https://fakestoreapi.com/products?limit=12",
    );
    console.log(data);
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occured</h2>;
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Product Available</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                        gap:"1rem"
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

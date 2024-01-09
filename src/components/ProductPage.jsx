import { Product } from "./Product";
export function ProductPage({ data, loading, error, addProduct }) {
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occured</h2>;
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "10px" }}>Product Available</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center",
                }}
            >
                {data.map((el) => (
                    <Product
                        key={el.id}
                        dataProd={el}
                        id={el.id}
                        title={el.title}
                        price={el.price}
                        imgUrl={el.image}
                        desc={el.description}
                        addingProduct={addProduct}
                    />
                ))}
            </div>
        </>
    );
}

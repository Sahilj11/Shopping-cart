import { useEffect, useState } from "react";

export function Product() {
    const { data, loading, error } = useProductAPI("https://fakestoreapi.com/products?limit=5");
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occured</h2>;
    return (
        <>
            <div style={{
                border:"1px solid red",
                borderRadius:"3px",
                padding:"5px"
            }}>
                <img src="" alt="Image" />
                <p>This is a title</p>
            </div>
        </>
    );
}
const useProductAPI = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url);
                let result = await res.json();
                console.log(result);
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    return { data, loading, error };
};

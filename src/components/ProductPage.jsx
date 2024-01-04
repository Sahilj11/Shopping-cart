import { useProductAPI } from "./useAPIs"

export function ProductPage() {
    const [data, loading, error] = useProductAPI("https://fakestoreapi.com/products?limit=5")
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occured</h2>;
    return (

   )
}

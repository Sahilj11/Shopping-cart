import { useState,useEffect } from "react";

export const useProductAPI = (url) => {
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

import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(url).then(res => {
            res.json().then(arr => {
                console.log(arr.products);
                setData(arr.products)
            })
        })
    }, [])
    return data;
}

export default useFetch;
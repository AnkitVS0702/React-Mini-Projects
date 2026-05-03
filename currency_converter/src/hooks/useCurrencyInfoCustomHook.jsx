import { useEffect, useState } from "react";


function useCurrencyInfoCustomHook(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                const d = res.json();
                return d;
            })
            .then((res) => {
                setData(res[currency]);
                return data;
            });
    }, [currency]);
    return data;
}

export default useCurrencyInfoCustomHook;
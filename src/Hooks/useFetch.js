import React from "react";

const useFetch = (url, method = "GET") => {
    const [response, setResponse] = React.useState({ dados: null, loading: true });

    React.useEffect(() => {
        async function requisicao() {
            const res = await fetch(url, { method });
            const json = await res.json();

            setResponse({ dados: json, loading: false });
        }

        requisicao();
    }, [url, method]);

    return response;
};

export default useFetch;

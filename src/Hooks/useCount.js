import React from "react";

const useCounter = (initialValue = 100) => {
    const [count, setCount] = React.useState(initialValue);

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);

    return [count, inc, dec];
};

export default useCounter;

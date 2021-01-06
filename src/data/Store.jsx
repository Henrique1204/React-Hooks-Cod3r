import React from "react";

const initialState = {
    number: 123,
    text: "Context API + Hooks"
};

export const AppContext = React.createContext(initialState);

const Store = ({ children }) => {
    const [state, setState] = React.useState(initialState);

    const updateState = (key, value) => setState({ ...state, [key]: value });

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: (value) => updateState("number", value),
            setText: (value) => updateState("text", value)
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default Store;

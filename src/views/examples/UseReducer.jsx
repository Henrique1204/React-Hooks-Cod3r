import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle.jsx';

const initialState = {
    user: null,
    number: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case "number_add2": return { ...state, number: state.number + 2 };
        case "number_mult7": return { ...state, number: state.number * 7 };
        case "number_divi25": return { ...state, number: state.number / 25 };
        case "number_parse": return { ...state, number: Math.round(state.number) };
        case "number_sum": return { ...state, number: state.number + action.payload };
        case "login": return { ...state, user: { nome: action.payload } };
        default: return state;
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
 
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user && <span className="text">{state.user.nome}</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_add2" })}
                    >+2</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "login", payload: "Paulo" })}
                    >login</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_mult7" })}
                    >X7</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_divi25" })}
                    >/25</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_parse" })}
                    >Arredondar</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_sum", payload: 5 })}
                    >+5</button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;

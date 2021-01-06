import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle.jsx';
// Importando contexto global.
import { DataContext } from "../../data/dataContext.js";
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
    const { state, setState } = React.useContext(DataContext);
    const { number, text, setNumber } = React.useContext(AppContext);

    const setNumber1 = (number) => setState({ ...state, number });

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => setNumber1(state.number + 1)} >+1</button>
                    <button className="btn" onClick={() => setNumber1(state.number - 1)} >-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>

                <div>
                    <button className="btn" onClick={() => setNumber(number + 1)} >+1</button>
                    <button className="btn" onClick={() => setNumber(number - 1)} >-1</button>
                </div>
            </div>
        </div>
    );
};

export default UseContext;

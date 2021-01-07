import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle.jsx';
import useCount from '../../Hooks/useCount.js';
import useFetch from '../../Hooks/useFetch.js';

const UseCustom = (props) => {
    const [count, inc, dec] = useCount(0);
    const { dados } = useFetch('http://files.cod3r.com.br/curso-react/estados.json');

    const showStates = (states) => {
        return states.map(({ nome, sigla }) => (
            <li key={sigla}>{nome} - {sigla}</li>
        ));
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={inc} >+</button>
                    <button className="btn" onClick={dec} >-</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {dados && showStates(dados)}
                </ul>
            </div>
        </div>
    );
};

export default UseCustom;

import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle.jsx';
import useCounter from '../../Hooks/useCount.js';

const UseCustom = (props) => {
    const [count, inc, dec] = useCounter(0);

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
        </div>
    );
};

export default UseCustom;

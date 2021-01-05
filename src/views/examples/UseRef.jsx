import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle.jsx';

function merge(v1, v2) {
    let v3 = "";
    let caracteres = v1.length + v2.length;

    for (let i = 0; caracteres > 0; i++) {
        v3 += (v1[i]) ? v1[i] : "";
        v3 += (v2[i]) ? v2[i] : "";
        caracteres -= 2;
    }

    return v3;
}

const UseRef = (props) => {
    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");
    const count = React.useRef(0);
    const myInput1 = React.useRef(null);
    const myInput2 = React.useRef(null);

    React.useEffect(() => {
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [value1]);

    React.useEffect(() => {
        count.current = count.current + 1;
        myInput1.current.focus();
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <p className="text">Valor: {merge(value1, value2)} [<span className="red">{count.current}</span>]</p>
                <input ref={myInput1} type="text"className="input" value={value1} onChange={({ target }) => setValue1(target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input ref={myInput2} type="text" className="input" value={value2} onChange={({ target }) => setValue2(target.value)} />
            </div>
        </div>
    );
};

export default UseRef;

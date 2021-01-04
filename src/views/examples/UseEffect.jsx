import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcularFat(n) {
    const number = Number(n);

    if (number < 0 || n === "") return -1;
    if (number === 0) return 1;

    return calcularFat(number - 1) * number;
}

const UseEffect = (props) => {
    const [number, setNumber] = React.useState(1);
    const [fatorial, setFatorial] = React.useState(1);

    React.useEffect(() => {
        console.log(Number(number));
        setFatorial(calcularFat(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <p className="text">
                    Fatorial: <span className="red">{fatorial === -1 ? "Valor não existe" : fatorial}</span>
                </p>
                <input className="input" type="number" value={number} onChange={({ target }) => setNumber(target.value)} />
            </div>
        </div>
    );
};

export default UseEffect;

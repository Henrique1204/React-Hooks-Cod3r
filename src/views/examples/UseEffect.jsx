import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcularFat(n) {
    const number = Number(n);

    if (number < 0 || n === "") return -1;
    if (number === 0) return 1;

    return calcularFat(number - 1) * number;
}

const testarImparPar = (n) => (n === "" ? "Valor vazio" : Number(n) % 2 === 0 ? "par" : "impar");

const UseEffect = (props) => {
    const [number, setNumber] = React.useState(1);
    const [fatorial, setFatorial] = React.useState(1);
    const [imparPar, setImparPar] = React.useState("impar");

    React.useEffect(() => {
        setFatorial(calcularFat(number));
    }, [number]);

    React.useEffect(() => {
        setImparPar(testarImparPar(number));
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

            <SectionTitle title="Exercício #02" />
            <div className="center">
            <p className="text red" >{imparPar}</p>
            </div>
        </div>
    );
};

export default UseEffect;

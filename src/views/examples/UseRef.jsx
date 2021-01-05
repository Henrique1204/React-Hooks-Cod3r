import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle.jsx';

const UseRef = (props) => {
    const [value1, setValue1] = React.useState("");
    const count = React.useRef(0);

    React.useEffect(() => {
        count.current = count.current + 1;
    }, [value1]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <p className="text">Valor: {value1} [<span className="red">{count.current}</span>]</p>
                <input type="text"className="input" value={value1} onChange={({ target }) => setValue1(target.value)} />
            </div>
        </div>
    );
};

export default UseRef;

import React from 'react';
import PageTitle from '../../components/layout/PageTitle';

const sum = (n1, n2) => {
    const future = Date.now() + 2000;

    while(Date.now() < future) {}

    return n1 + n2;
};

const UseMemo = (props) => {
    const [n1, setN1] = React.useState(0);
    const [n2, setN2] = React.useState(0);
    const [n3, setN3] = React.useState(0);

    const result = React.useMemo(() => sum(n1, n2), [n1, n2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input
                    type="number"
                    className="input"
                    value={n1}
                    onChange={({ target }) => setN1(Number(target.value))}
                />

                <input
                    type="number"
                    className="input"
                    value={n2}
                    onChange={({ target }) => setN2(Number(target.value))}
                />

                <input
                    type="number"
                    className="input"
                    value={n3}
                    onChange={({ target }) => setN3(Number(target.value))}
                />

                <span className="text">{result}</span>
            </div>
        </div>
    );
};

export default UseMemo;

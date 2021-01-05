import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import UseCallBackButton from './UseCallBackButton';

const UseCallback = (props) => {
    const [count, setCount] = React.useState(0);

    const inc = React.useCallback((delta) => {
        setCount((count) => count + delta)
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

                <UseCallBackButton inc={inc} />
            </div>
        </div>
    );
};

export default UseCallback;

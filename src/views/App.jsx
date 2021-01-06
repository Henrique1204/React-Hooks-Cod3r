import './App.css';
import React from 'react';
import { BrowserRouter } from  'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
// Importando contexto global.
import { DataContext, data } from "../data/dataContext.js";

const App = props => {
    const [state, setState] = React.useState(data);

    return (
        <DataContext.Provider value={{ state, setState }} >
            <div className="App">
                <BrowserRouter>
                    <Menu />
                    <Content />
                </BrowserRouter>
            </div>
        </DataContext.Provider>
    );
};

export default App;
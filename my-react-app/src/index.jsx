import React from 'react';
import ReactDOM from 'react-dom';
import { MindAR } from './main.js';
import ExternalPage from './external-page/ExternalPage.jsx';

function MyComponent() {
    const ar = new MindAR();

    ar.start();
}

/*ReactDOM.render(
    <React.StrictMode>
        <h1>Hello, World!</h1>
        <ExternalPage />
    </React.StrictMode>,
    document.getElementById('root')
);*/
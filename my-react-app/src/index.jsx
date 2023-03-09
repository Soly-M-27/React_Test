import React from 'react';
import ReactDOM from 'react-dom';
import MindAR from './public/main.js';
import ExternalPage from './external-page/ExternalPage.jsx';

function MyComponent() {
    const ar = new MindAR();

    ar.start();
}
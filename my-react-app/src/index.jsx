import React from 'react';
import ReactDOM from 'react-dom';
import MindAR from './public/main.js';

function MyComponent() {
    const ar = new MindAR();

    ar.start();
}
import React from 'react';
import ReactDOM from 'react-dom';
import ExternalPage from './external-page/ExternalPage.jsx';

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <ExternalPage />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
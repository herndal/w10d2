import React from 'react'; // es6 import syntax
import ReactDOM from 'react-dom';
import Root from './root';


document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Root />, main);
});


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data/data';

ReactDOM.render(<App {...data} />, document.getElementById('root'));
registerServiceWorker();

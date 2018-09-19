import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './scss/style.scss';
import Output from './components/Output';

ReactDOM.render(<Output />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import 'antd/dist/antd.css';
import './scss/style.scss';
import Output from './components/Output';

ReactDOM.render(
                
                <Output><Helmet>
                    <title>My Title</title>
                </Helmet></Output>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

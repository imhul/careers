import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store/reducers/rootReducer';
import 'antd/dist/antd.css';
import './scss/style.scss';

import Output from './components/Output';

const mapStateToProps = (state) => {
    return {
        careers: state
    }
};

const MainComponent = connect(mapStateToProps)(Output);

ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

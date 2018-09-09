import React, { Component } from 'react';
import { Router } from "react-router-dom";
import history from '../history';
import LayoutMain from './LayoutMain';

class Output extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <LayoutMain />
            </Router>
        )
    }
}

export default Output


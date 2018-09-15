import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import store from "../../../store/reducers/rootReducer";

import './style'

class Job extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Job">
                <Link to="/careers">
                    <Button>Back to list</Button>
                </Link>
                
                { store.getState().formType.type == 'new' && <Form /> }
            </div>
        )
    }
}

export default Job
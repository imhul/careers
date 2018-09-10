import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TaskList } from '../../TaskList';
import { Filter } from '../../Filter';
import { Form } from '../../Form';

import { store } from "../../../store/reducers/rootReducer";

import './style'

class Job extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Job">
                <Link to="/careers">Back to list</Link>
                <TaskList data={store.getState()} />
                <Filter />
                { store.getState().formType.type == 'new' && <Form /> }
            </div>
        )
    }
}

export default Job
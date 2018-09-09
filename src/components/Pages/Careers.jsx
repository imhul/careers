import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TaskList } from '../TaskList';
import { Filter } from '../Filter';
import { Form } from '../Form';

import { store } from "../../store/reducers/rootReducer";

class Careers extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/job">More</Link>
                <TaskList data={store.getState()} />
                <Filter />
                { store.getState().formType.type == 'new' && <Form /> }
            </div>
        )
    }
}

export default Careers


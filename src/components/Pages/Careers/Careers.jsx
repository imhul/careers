import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CareerList from './CareerList';
import Filter from './Filter';
import store from "../../../store/reducers/rootReducer";
import './style'

class Careers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Careers">
                <div className="content">
                    <Link to="/job">More</Link>
                    <CareerList data={store.getState()} />
                    <Filter />
                </div>

                <div className="aside-container">
                    <aside>
                    
                    </aside>
                </div>
            </div>
        )
    }
}

export default Careers;


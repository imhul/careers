import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CareerList from './CareerList';
import Filter from './Filter';
import store from "../../../store/reducers/rootReducer";
import img from '../../../images/intro.png';

class Careers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Careers">
                <div className="content">
                    <select name="test" className="test"></select>
                    <div className="filter-container">
                        <h1>Careers</h1>
                        <Filter />
                    </div>
                    
                    <div className="introduce">
                        <p className="bold">Silver Stem Fine Cannabis team welcomes you!</p>
                        <p>Are you highly motivated, organized, tactful, and passionate about the cannabis industry? Here you can find all our current job openings and apply for the desired position.</p>
                        <div className="img-container">
                            <img src={img} alt="Careers" />
                        </div>
                    </div>

                    <CareerList data={store.getState()} />
                    
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


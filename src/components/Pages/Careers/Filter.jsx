import React, { Component } from 'react';
import store from "../../../store/reducers/rootReducer";
import CareerNamesSelect from "./Filter--CareerNamesSelect";

class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <span className="icon-filter"> Filter</span>
                <CareerNamesSelect namesList={ store.getState().careerNamesSelect }/>
            </div>
        )
    }
}

export default Filter;

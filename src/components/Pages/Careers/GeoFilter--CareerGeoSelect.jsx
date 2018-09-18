import React, { Component } from 'react';
import store from "../../../store/reducers/rootReducer";

import initialState from "../../../store/initialState";
import addCareerGeoToSelectAction from "../../../store/actions/addCareerGeoToSelectAction";
import careerGeoFilterAction from "../../../store/actions/careerGeoFilterAction";

console.log("::::initialState::::", initialState);

initialState.locations.forEach((item) => {
    store.dispatch(addCareerGeoToSelectAction(item))
});



class CareerGeoSelect extends Component {

    constructor(props){
        super(props);

        console.log("::::this.props::::", this.props);

        if (this.props.locations.length) {
            this.state = {
                locations: this.props.locations
            }
        } else {
            this.state = {
                locations: store.getState().locations
            }
        }
    }

    filtered(value){
        store.dispatch(careerGeoFilterAction(value));
    }

    componentWillReceiveProps(newProps){
        this.setState(newProps)
    }

    render(){
        return <select className="select" onChange={(e)=> {this.filtered(e.target.value)}}>
            {this.state.locations.map((item, index) => {
                return <option value={item} key={`${index-56489461}`}>{item}</option>
            })}
        </select>
    }
}

export default CareerGeoSelect;
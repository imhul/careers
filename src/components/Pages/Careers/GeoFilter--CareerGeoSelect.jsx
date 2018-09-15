import React, { Component } from 'react';
import store from "../../../store/reducers/rootReducer";

import initialState from "../../../store/initialState";
import addCareerGeoToSelectAction from "../../../store/actions/addCareerGeoToSelectAction";
import careerGeoFilterAction from "../../../store/actions/careerGeoFilterAction";

initialState.careerGeoSelect.forEach((item) => {
    store.dispatch(addCareerGeoToSelectAction(item))
})


class CareerGeoSelect extends Component {

    constructor(props){
        super(props);

        if (this.props.geoList.length) {
            this.state = {
                geoList: this.props.geoList
            }
        } else {
            this.state = {
                geoList: store.getState().careerGeoSelect
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
            {this.state.geoList.map((item, index) => {
                return <option value={item} key={`${index-56489461}`}>{item}</option>
            })}
        </select>
    }
}

export default CareerGeoSelect;
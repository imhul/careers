import React, { Component } from 'react';
import store from "../../../store/reducers/rootReducer";

import initialState from "../../../store/initialState";
import addCareerNameToSelectAction from "../../../store/actions/addCareerNameToSelectAction";
import careerNameFilterAction from "../../../store/actions/careerNameFilterAction";

initialState.careerNamesSelect.forEach((item) => {
    store.dispatch(addCareerNameToSelectAction(item))
})


class CareerNamesSelect extends Component {

    constructor(props){
        super(props);

        if (this.props.namesList.length) {
            this.state = {
                namesList: this.props.namesList
            }
        } else {
            this.state = {
                namesList: store.getState().careerNamesSelect
            }
        }
        // this.state = (this.props.namesList.length) ? {namesList: this.props.namesList} :
        //     {namesList: store.getState().careerNamesSelect}
    }

    filtered(value){
        store.dispatch(careerNameFilterAction(value));
    }

    componentWillReceiveProps(newProps){
        this.setState(newProps)
    }

    render(){
        return <select className="select" onChange={(e)=> {this.filtered(e.target.value)}}>
            {this.state.namesList.map((item, index) => {
                return <option value={item} key={`${index-56489461}`}>{item}</option>
            })}
        </select>
    }
}

export default CareerNamesSelect;
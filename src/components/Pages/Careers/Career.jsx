import React, { Component } from 'react';

import { store } from "../../../store/reducers/rootReducer";
import { closeCareerAction } from "../../../store/actions/closeCareerAction";
import { removeCareerNameFromSelectAction } from "../../../store/actions/removeCareerNameFromSelectAction";

class Career extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDescrOpen: false
        }
    }

    closeCareer(key, careerName){
        store.dispatch(closeCareerAction(key));
        store.dispatch(removeCareerNameFromSelectAction(careerName));
    }

    toggleDescription(){
        this.setState({
            isDescrOpen: !this.state.isDescrOpen
        })
    }

    render(){
        let { key, title, careerName, description } = this.props.data;

        return <section  key={key}>
            <h2 className="title">{title}</h2>
            <div className="info">
                <div className="career">Career: <span className="name">{careerName}</span></div>
                
            </div>
            <div className="description">{ (this.state.isDescrOpen) ? description : "" }</div>
            <div className="btns-wrap">
                <button className="btn" onClick={ () => {this.closeCareer(key, careerName)} }>Close</button>
                <button className="btn" onClick={ () => {this.toggleDescription()} }>
                    { (!this.state.isDescrOpen) ? "Open" : "Close" }
                </button>
            </div>
        </section>
    }
}

export default Career
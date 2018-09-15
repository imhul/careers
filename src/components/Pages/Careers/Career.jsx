import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import store from "../../../store/reducers/rootReducer";
// import closeCareerAction from "../../../store/actions/closeCareerAction";
// import removeCareerNameFromSelectAction from "../../../store/actions/removeCareerNameFromSelectAction";

class Career extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDescrOpen: false
        }
    }

    // closeCareer(key, careerName){
    //     store.dispatch(closeCareerAction(key));
    //     store.dispatch(removeCareerNameFromSelectAction(careerName));
    // }
    // <button className="btn" onClick={ () => {this.closeCareer(key, careerName)} }>Delete</button>


    toggleDescription(){
        this.setState({
            isDescrOpen: !this.state.isDescrOpen
        })
    }

    render(){
        let { key, title, careerName, intro, description } = this.props.data;

        return (
            <section key={key}>

                <h2 className="title">{title}</h2>

                <div className="info">
                    <div className="career">
                        Career: 
                        <span className="name">
                            {careerName}
                        </span>
                    </div>
                </div>

                <div className="intro" onClick={ () => { this.toggleDescription() } }>
                    {intro}
                    <div className="description">
                    { ( this.state.isDescrOpen ) ? ( <div> { description } <Link to="/job">More</Link> </div> ) : "" }
                        
                    </div>

                    <div className="more-less">
                            { ( !this.state.isDescrOpen ) ? "open" : "close" }
                    </div>
                </div>

                

            </section>
        )
    }
}

export default Career;
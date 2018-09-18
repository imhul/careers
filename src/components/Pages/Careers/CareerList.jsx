import React, { Component } from 'react';
import Career from "./Career";

class CareerList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(newProps){
        this.setState(newProps);
    }

    render() {
        let {careers, filter} = this.state.data;

        if ((filter.byLocation && filter.byLocation != 'All') && (filter.byCareerName && filter.byCareerName != 'All')) {
            return <div className="career-list">
                {
                    careers.map((item) => {
                        if (item.location == filter.byLocation) {
                            return <Career data={item} key={item.key} />;
                        }
                        if (item.careerName == filter.byCareerName) {
                            return <Career data={item} key={item.key} />;
                        }
                    })
                }
            </div>
        }

        return (
            <div className="career-list">
                {
                    careers && careers.map((item) => {
                        return <Career data={item} key={item.key}/>
                    })
                }
            </div>
        )
    }
}

export default CareerList;
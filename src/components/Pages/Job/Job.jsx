import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import store from "../../../store/reducers/rootReducer";

class Job extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Job">
                <Link to="/careers">
                    <Button>Back to list</Button>
                </Link>
            </div>
        )
    }
}

export default Job;
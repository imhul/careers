import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initialState from '../../../store/initialState';
import history from '../../../history';
import { Button } from 'antd';

const careers = initialState.careers;
const jobId = history.location.pathname.replace(/\D/g, '');

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: careers.filter(item => item.key === +jobId)
        }
    }

    componentDidMount() {
        this.setState({
            item: careers.filter(item => item.key === +jobId)
        })
    }

    render() {
        return (
            <div className="Job">
                <Link to="/careers">
                    <Button>Back to list</Button>
                </Link>

                <div className="content">

                    <section key={this.state.item[0].key}>
                        <h2 className="title">{this.state.item[0].title}</h2>
                        <div className="info">
                            <div className="career">
                                Career:
                                            <span className="name">
                                    {this.state.item[0].careerName}
                                </span>
                            </div>
                        </div>

                        <div className="intro">
                            {this.state.item[0].intro}
                            <div className="description">
                                {this.state.item[0].description}
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default Job;
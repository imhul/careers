import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initialState from '../../../store/initialState';
import history from '../../../history';
import { Button } from 'antd';

const careers = initialState.careers;
const jobId = history.location.pathname.replace(/\D/g,'');

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: careers.filter(item => item.key === +jobId)
            // items: careers.filter( item => {
            //     console.log("::::item.key::::", item.key);
            //     console.log("::::jobId::::", jobId);
            //     return item.key === +jobId
            // })
        }
    }

    componentDidMount() {
        this.setState({
            items: careers.filter(item => item.key === +jobId)
        })
    }

    render() {
        return (
            <div className="Job">
                <Link to="/careers">
                    <Button>Back to list</Button>
                </Link>
                { console.log("::::this.state.items::::", this.state.items) }
                { console.log("::::careers::::", careers) }
                <div className="content">
                    {this.state.items.map(item => {
                        return (
                            <section key={item.key}>
                                <h2 className="title">{item.title}</h2>
                                <div className="info">
                                    <div className="career">
                                        Career:
                                            <span className="name">
                                            {item.careerName}
                                        </span>
                                    </div>
                                </div>

                                <div className="intro">
                                    {item.intro}
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Job;
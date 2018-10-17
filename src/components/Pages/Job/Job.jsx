import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { careers } from '../../../store/initialState';
import history from '../../../history';
import { Button, Row, Col } from 'antd';
import introImg from '../../../images/jobs/job-full.png';
import Apply from '../../Apply';
import Aside from '../../Aside';

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
        const job = this.state.item[0];
        return (
            <div className="Job">

                <div className="content">

                    <Row gutter={24} type="flex" align="middle" className="content-header">
                        <Col span={14}>
                            <div className="image-container">
                                <img src={ introImg } alt={ job.title } />
                            </div>
                        </Col>
                        <Col span={10} className="short-desc">
                            <h2 className="title">{job.title}</h2>
                            <h2 className="department">{ job.department }</h2>
                            <h3 className="location"><span className="icon-location" />{job.location}</h3>
                            <Apply />
                        </Col>
                    </Row>

                    <section key={job.key}>
                        <div className="description">
                            <h2>Description</h2>
                            <p>{job.description}</p>
                            <h2>Position Summary</h2>
                            <p>{job.summary}</p>
                        </div>
                    </section>
                </div>
                <Aside />
            </div>
        )
    }
}

export default Job;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { careers, careerNamesSelect, locations  } from '../../../store/initialState';
// import baseUrl from './../../../store/baseUrl';

import { Select, Collapse, Row, Col } from 'antd';
import introImg from '../../../images/intro.png';
import jobImg from '../../../images/jobs/job-thumb.png';

const Option = Select.Option;
const Panel = Collapse.Panel;

class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careers: careers,
            location: "All",
            name: "All",
            isOpen: false,
        }
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.setStore = this.setStore.bind(this);
    }

    handleChangeLocation(value, option) {
        this.setState({
            careers: careers.filter(item => item.location === option.props.children)
        });
    }

    handleChangeName(value, option) {
        this.setState({
            careers: careers.filter(item => item.title === option.props.children)
        });

    }

    handleCollapse() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    setStore(id, event) {
        const target = event.target;
        console.log("event: ", event);
        console.log("id: ", id)
    }

    render() {

        return (
            <div className="Careers">
                <div className="content">

                    <Row gutter={24} type="flex" align="middle" className="content-header">
                        <Col span={14}>
                            <div className="img-container">
                                <img src={introImg} alt="Careers" />
                            </div>
                        </Col>
                        <Col span={10}>
                            <div className="introduce">
                                <h1>Careers</h1>
                                <p className="bold">Silver Stem Fine Cannabis team welcomes you!</p>
                                <p>Are you highly motivated, organized, tactful, and passionate about the cannabis industry? Here you can find all our current job openings and apply for the desired position.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={24} type="flex" align="middle">
                        <Col span={12}>
                            <div className="geofilter">
                                <Select
                                    className="select"
                                    placeholder={this.state.location}
                                    onSelect={this.handleChangeLocation}
                                >
                                    {locations.map((location, index) => {
                                        return (
                                            <Option key={index}>{location}</Option>
                                        )
                                    })}

                                </Select>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="filter">
                                {/* <span className="icon-filter"> Filter</span> */}
                                <Select
                                    className="select"
                                    placeholder={this.state.name}
                                    onSelect={this.handleChangeName}
                                >
                                    {careerNamesSelect.map((name, index) => {
                                        return (
                                            <Option key={index}>{name}</Option>
                                        )
                                    })}
                                </Select>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={24} className="list-header">
                        <Col span={20}>Job</Col>
                        <Col span={4}>Dispensaries</Col>
                    </Row>

                    <Collapse onChange={this.handleCollapse}>

                        {this.state.careers.map(item => {

                            const head = (
                                <Row gutter={24} type="flex" align="middle" justify="space-between">

                                    <Col span={3}>
                                        <img src={jobImg} alt={item.title} width="70" height="70" />
                                        {/* <img src={require(`${baseUrl}src/images/${item.image}`)} /> */}

                                        {/* {import(`${baseUrl}src/images/${item.image}`).then(jobImg => {
                                            console.log("::image::", jobImg);

                                             return (
                                                <img src={`${jobImg}`} alt="" />
                                            ) 
                                        })}*/}
                                    </Col>

                                    <Col span={17}>
                                        <h2 className="title">{item.title}</h2>
                                        <h2 className="intro">{item.intro}</h2>
                                    </Col>
                                    
                                    {/* <div className="more-less">
                                        {this.state.isOpen ? "close" : "open"}
                                    </div> */}

                                    <Col span={4} className="location">{item.location}</Col>
                                </Row>
                            );
                            return (
                                <Panel key={item.key} header={head} showArrow={false} bordered={false}>
                                    <div className="description">
                                        <p>Description: {item.description}</p>
                                        <Link
                                            to={`/job/${item.key}`}
                                            className={item.key}
                                            onClick={() => this.setStore(item.key)}> More
                                        </Link>
                                    </div>
                                </Panel>
                            )
                        })}
                    </Collapse>

                    <p>
                        Or you can checkout open positions at 
                        <a href="https://recruiting.paylocity.com/Recruiting/Jobs/List/1221" title="paylocity" target="_blank"> paylocity</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Careers;


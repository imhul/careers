import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { careers, careerNamesSelect, locations } from '../../../store/initialState';
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
                        <Col 
                            xs={{ span: 24, order: 4, }} 
                            sm={{ span: 24, order: 4, }} 
                            md={{ span: 14, order: 1, }} 
                            lg={{ span: 14, order: 1, }} 
                            xl={{ span: 14, order: 1, }}>
                            <div className="img-container">
                                <img src={introImg} alt="Careers" />
                            </div>
                        </Col>
                        <Col 
                            xs={{ span: 24, order: 3, }} 
                            sm={{ span: 24, order: 3, }} 
                            md={{ span: 10, order: 2, }} 
                            lg={{ span: 10, order: 2, }} 
                            xl={{ span: 10, order: 2, }}>
                            <div className="introduce">
                                <h1 className="desktop">Careers</h1>
                                <p className="bold">Silver Stem Fine Cannabis team welcomes you!</p>
                                <p>Are you highly motivated, organized, tactful, and passionate about the cannabis industry? Here you can find all our current job openings and apply for the desired position.</p>
                            </div>
                        </Col>
                        <Col 
                            xs={{ span: 24, order: 1, }} 
                            sm={{ span: 24, order: 1, }} 
                            md={{ span: 12, order: 3, }} 
                            lg={{ span: 12, order: 3, }} 
                            xl={{ span: 12, order: 3, }}>
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
                        <Col 
                            xs={{ span: 24, order: 2, }} 
                            sm={{ span: 24, order: 2, }} 
                            md={{ span: 12, order: 4, }} 
                            lg={{ span: 12, order: 4, }} 
                            xl={{ span: 12, order: 4, }}>
                            <div className="filter desktop">
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
                            <div className="filter-container mobile">
                                <h1>Careers</h1>
                                <div className="filter">
                                    <span className="icon-filter"> Filter</span>
                                    <Select
                                        className="select"
                                        dropdownMatchSelectWidth={false}
                                        showArrow={false}
                                        onSelect={this.handleChangeName}
                                        dropdownStyle={{
                                            right: '20px',
                                        }}
                                    >
                                        {careerNamesSelect.map((name, index) => {
                                            return (
                                                <Option key={index}>{name}</Option>
                                            )
                                        })}
                                    </Select>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={24} className="list-header desktop">
                        <Col span={20}>Job</Col>
                        <Col span={4}>Dispensaries</Col>
                    </Row>

                    <Collapse onChange={this.handleCollapse}>

                        {this.state.careers.map((item, index) => {

                            const head = (
                                <Row key={index} gutter={24} type="flex" align="middle" justify="space-between">

                                    <Col span={3} className="desktop">
                                        <img src={jobImg} alt={item.title} width="70" height="70" />
                                        {/* <img src={require(`${baseUrl}src/images/${item.image}`)} /> */}

                                        {/* {import(`${baseUrl}src/images/${item.image}`).then(jobImg => {
                                            console.log("::image::", jobImg);

                                             return (
                                                <img src={`${jobImg}`} alt="" />
                                            ) 
                                        })}*/}
                                    </Col>

                                    <Col span={17} className="desktop">
                                        <h2 className="title">{item.title}</h2>
                                        <h2 className="intro">{item.intro}</h2>
                                    </Col>

                                    {/* <div className="more-less">
                                        {this.state.isOpen ? "close" : "open"}
                                    </div> */}

                                    <Col span={24} order={1} className="mobile">
                                        <h2 className="title">{item.title}</h2>
                                    </Col>

                                    <Col 
                                        xs={{ span: 24, order: 2, }} 
                                        sm={{ span: 24, order: 2, }} 
                                        md={{ span: 4, order: 4, }} 
                                        lg={{ span: 4, order: 4, }} 
                                        xl={{ span: 4, order: 4, }}
                                        className="location">
                                        <span className="icon-location mobile" />
                                        {item.location}
                                    </Col>

                                    <Col span={24} order={3} className="mobile">
                                        <h2 className="intro">
                                            {item.intro}
                                            <div className="more-less">
                                                {/* {this.state.isOpen ? "close" : "open"}
                                                <span className="icon-arrow_down" style={this.state.isOpen ? {
                                                    transform: 'rotate(0.5turn)'
                                                } : {
                                                    transform: 'rotate(0turn)'
                                                } } /> */}
                                            </div>
                                        </h2>
                                    </Col>
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


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initialState from '../../../store/initialState';

import { Select, Collapse } from 'antd';
import img from '../../../images/intro.png';

const items = initialState.careers;
const careerNames = initialState.careerNamesSelect;
const locations = initialState.locations;
const Option = Select.Option;
const Panel = Collapse.Panel;


class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: initialState.careers,
            location: "All",
            isOpen: false
        }
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
        this.setStore = this.setStore.bind(this);
    }

    handleChangeLocation(value, option) {
        this.setState({
            items: items.filter(item => item.location === option.props.children)
        });
    }

    handleChangeName(value, option) {
        this.setState({
            items: items.filter(item => item.careerName === option.props.children)
        })
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

                    <div className="geofilter">
                        <Select
                            className="select"
                            dropdownMatchSelectWidth={false}
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

                    <div className="filter-container">
                        <h1>Careers</h1>
                        <div className="filter">
                            <span className="icon-filter"> Filter</span>
                            <Select
                                className="select"
                                dropdownMatchSelectWidth={false}
                                showArrow={false}
                                onSelect={this.handleChangeName}
                            >
                                {careerNames.map((name, index) => {
                                    return (
                                        <Option key={index}>{name}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </div>

                    <div className="introduce">
                        <p className="bold">Silver Stem Fine Cannabis team welcomes you!</p>
                        <p>Are you highly motivated, organized, tactful, and passionate about the cannabis industry? Here you can find all our current job openings and apply for the desired position.</p>
                        <div className="img-container">
                            <img src={img} alt="Careers" />
                        </div>
                    </div>

                    <Collapse onChange={ this.handleCollapse }>
                        { this.state.items.map(item => {
                            const head = (
                                <div>
                                    <h2 className="title">{item.title}</h2>
                                    <div className="info">
                                        <div className="career">
                                            Career: <span className="name">
                                                { item.careerName }
                                            </span>
                                        </div>
                                        <div>Location: {item.location}</div>
                                    </div>
                                    <p className="intro">
                                        { item.intro }
                                    </p>
                                    <div className="more-less">
                                        { this.state.isOpen ? "close" : "open" }
                                    </div>
                                </div>
                            );
                            return (
                                <Panel key={ item.key } header={ head } showArrow={ false } bordered={ false }>
                                    <div className="description">
                                        <p>Description: {item.description}</p>
                                        <Link 
                                            to={ `/job/${item.key}` } 
                                            className={ item.key } 
                                            onClick={ () => this.setStore(item.key)}> More
                                        </Link>
                                    </div>
                                </Panel>
                            )
                        })}
                    </Collapse>
                </div>

                <div className="aside-container">
                    <aside>

                    </aside>
                </div>
            </div>
        )
    }
}

export default Careers;


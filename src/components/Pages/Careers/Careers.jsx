import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initialState from '../../../store/initialState';
import { Select } from 'antd';
import img from '../../../images/intro.png';

const items = initialState.careers;
const careerNames = initialState.careerNamesSelect;
const locations = initialState.locations;
const Option = Select.Option;


class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDescrOpen: false,
            items: initialState.careers,
            location: "All"
        }
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    toggleDescription() {
        this.setState({
            isDescrOpen: !this.state.isDescrOpen
        })
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

                    <div className="career-list">

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

                                    <div className="intro" onClick={() => { this.toggleDescription() }}>
                                        {item.intro}
                                        <div className="description">
                                            {(this.state.isDescrOpen) ?
                                                (<div> {item.description}
                                                    <Link to={`/job/${item.key}`}>More</Link> </div>) : ""
                                            }
                                        </div>

                                        <div className="more-less">
                                            {(!this.state.isDescrOpen) ? "open" : "close"}
                                        </div>
                                    </div>
                                </section>
                            )

                        })}

                    </div>

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


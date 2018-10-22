import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { locations, careers } from '../../../store/initialState';
import history from '../../../history';
import { Select, Icon, Row, Col } from 'antd';
import Slider from "react-slick";
import introImg from '../../../images/jobs/job-full.png';
import Apply from '../../Apply';
import Aside from '../../Aside';

const Option = Select.Option;
const jobId = history.location.pathname.replace(/\D/g, '');

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <Icon
            type="arrow-right"
            theme="outlined"
            className={`${className} mobile`}
            style={{
                color: '#1b9855',
                fontSize: 19,
                zIndex: 1,
                height: 20,
                width: 20,
                right: 0,
                top: 16
            }}
            onClick={onClick} />
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <Icon
            type="arrow-left"
            theme="outlined"
            className={`${className} mobile`}
            style={{
                color: '#1b9855',
                fontSize: 19,
                zIndex: 1,
                height: 20,
                width: 20,
                right: 90,
                top: 16,
            }}
            onClick={onClick} />
    );
}
class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: careers.filter(item => item.key === +jobId),
            location: '',
            activeSlide: 0,
        }
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
    }

    componentDidMount() {
        this.setState({
            item: careers.filter(item => item.key === +jobId),
            location: this.state.item.location
        });
        this.slider.slickGoTo(+jobId - 1, false)
    }

    handleChangeLocation(value, option) {
        this.setState({
            careers: careers.filter(item => item.location === option.props.children)
        });
    }

    render() {
        const job = this.state.item[0];
        const settings = {
            dots: false,
            effect: 'fade',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => this.setState({ 
                activeSlide: next,
                item: careers.filter(item => item.key === (next + 1) ),
            }),
        }
        return (
            <div className="Job">

                <div className="content">

                    <div className="geofilter mobile">
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
                    {/* BeforeChange => activeSlide: <span>{this.state.activeSlide}</span> */}


                    <Slider ref={slider => (this.slider = slider)} {...settings}>

                        {careers.map((item, index) => {
                            return (
                                <div key={index} className="slide-container">
                                    <Row gutter={24} type="flex" align="middle" className="content-header">
                                        <Col span={12} className="mobile back-link">
                                            <Link to="/careers">All Careers</Link>
                                        </Col>

                                        <Col span={12} className="mobile counter">
                                            {item.key} of {careers.length}
                                        </Col>

                                        <Col span={15} xs={{ span: 12, }}>
                                            <div className="image-container">
                                                <img src={introImg} alt={job.title} />
                                            </div>
                                        </Col>

                                        <Col span={9} xs={{ span: 12, }} className="short-desc">
                                            <h2 className="title">{job.title}</h2>
                                            <h2 className="department">{job.department}</h2>
                                            <h3 className="location">
                                                <span className="icon-location" />
                                                {job.address}
                                            </h3>
                                            <div className="desktop"><Apply /></div>
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
                                    <div className="mobile"><Apply /></div>
                                </div>
                            )
                        })}

                    </Slider>


                </div>
                <Aside />
            </div>
        )
    }
}

export default Job;
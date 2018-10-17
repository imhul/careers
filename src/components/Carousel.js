window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

import React, { Component } from 'react';
import { careers } from '../store/initialState';
import Slider from "react-slick";
import jobImg from '../images/jobs/job.png';
import chevronLeft from '../images/chevron_left.png';
import chevronRight from '../images/chevron_right.png';


const imgStyles = {
    width: "100%",
    height: "auto",
};

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={chevronRight}
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: 1,
                borderRadius: 1,
                backgroundColor: 'rgba(50, 62, 72, 0.7)'
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={chevronLeft}
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: 1,
                borderRadius: 1,
                backgroundColor: 'rgba(50, 62, 72, 0.7)'
            }}
            onClick={onClick}
        />
    );
}

class Carousel extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }

        return (
            <div>
                <h2 className="content-bottom-title">Also Recommended for you</h2>
                <Slider {...settings}>

                    {careers.map((item, index) => {
                        return (
                            <div key={index} className="slide-container" style={index === 1 ? { margin: "0 24px", } : null }>
                                <div className="image-container">
                                    <img src={jobImg} alt={item.title} style={imgStyles} />
                                </div>
                                <div className="title-container">
                                    <h2 className="title">{item.title}</h2>
                                    <h2 className="location">{item.location}</h2>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>
        )

    }
}

export default Carousel;
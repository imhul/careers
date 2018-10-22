window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

import React, { Component } from 'react';
import { careers } from '../store/initialState';
import Slider from "react-slick";
import { Icon } from 'antd';
import jobImg from '../images/jobs/job.png';
// import chevronLeft from '../images/chevron_left.png';
// import chevronRight from '../images/chevron_right.png';


const imgStyles = {
    width: "100%",
    height: "auto",
};

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <span 
            className={`${className} icon-navigate_next`} 
            style={{ right: 28, }} 
            onClick={onClick} />

    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <span 
            className={`${className} icon-navigate_prev`} 
            style={{ left: 10, transform: 'rotate(0.5turn)' }} 
            onClick={onClick} />
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
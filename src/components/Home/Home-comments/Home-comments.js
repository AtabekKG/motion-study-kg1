import React from 'react';
import Slider from "react-slick";
import "./Home-comments.scss";
import commentsImg1 from "./../../../image/Home-comments1.png";
import commentsImg2 from "./../../../image/Home-comments2.png";

const HomeComments = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <div id="comments">
        <div className="container">
            <div className="comments">
                <h1 className="comments-title">video testimonials from our students</h1>
                <Slider className="comments-slider" {...settings}>
                    <div>
                        <img src={commentsImg1} alt=""/>
                    </div>
                    <div>
                        <img src={commentsImg2} alt=""/>
                    </div>
                    <div>
                        <img src={commentsImg1} alt=""/>
                    </div>
                    <div>
                        <img src={commentsImg2} alt=""/>
                    </div>
                </Slider>
            </div>
        </div>
    </div>;
};

export default HomeComments;
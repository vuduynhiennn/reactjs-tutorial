import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,  
    };
    return (
        <Carousel {...settings}>
            <Wrap>
               <img src='/images/slider-badging.jpg' />
            </Wrap>

            <Wrap>
                <img src='images/slider-badag.jpg' />
            </Wrap>

            <Wrap>
                <img src='images/slider-scale.jpg' />
            </Wrap>

            <Wrap>
                <img src='images/slider-scales.jpg' />
            </Wrap>
        </Carousel>
    );
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
         }
    }

    li.slick-active button:before { 
        color: white;
    }

    .slick-list { 
        overflow: visible;
    }


    button {
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: none;
    box-sizing: border-box;
    border-radius: 6px;
    &:hover {
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
    img {
            border: 4px solid transparent;
            border-radius: 4px;
            width: 100%;
            height: 100%;
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rbg(0 0 0 / 73%) 0px 16px 10px -10px;
        }
`;
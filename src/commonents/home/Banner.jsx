import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFive,
} from "../../assets/index"


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{display: "block", background: "red", position: 'absolute', width: '80px', height: '190px', zIndex: 100, }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{display: "block", position: 'absolute', width: '80px', height: '190px', zIndex: 100, background: "green" }}
        onClick={onClick}
      />
    );
  }

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        appendDots: dots => (
            <div
              style={{
                padding: "10px",
                position: 'absolute',
                transform: 'translate(-50% -50%)',
                top: '75%',
                left: '45%'
              }}
            >
              <ul style={{ 
                display: "flex",
                gap: '14px'
              }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "white",
                background:'#232F3E',
                cursor:'pointer',
                borderRadius: "50%",
                border: "1px #F3A847 solid"
              }}
            >
              {i + 1}
            </div>
          )
      };
      return (
        <div className=" w-full mt-[105px]">
            <div className=' w-full h-full relative'>
            <Slider {...settings}>
                <div>
                    <img className='w-screen h-[734px] object-cover focus:outline-none' src={bannerImgOne} alt="img" />
                </div>
                <div>
                    <img className='w-screen h-[734px] object-cover focus:outline-none' src={bannerImgTwo} alt="img" />
                </div>
                <div>
                    <img className='w-screen h-[734px] object-cover focus:outline-none' src={bannerImgThree} alt="img" />
                </div>
                <div>
                    <img className='w-screen h-[734px] object-cover focus:outline-none' src={bannerImgFive} alt="img" />
                </div>
            </Slider>
            </div>
        </div>
      );
}

export default Banner;
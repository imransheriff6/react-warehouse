import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import logo6 from "../images/walmart.webp";
import logo5 from "../images/shopify.webp";
import logo4 from "../images/ChannelAdvisor.webp";
import logo3 from "../images/Target.webp";
import logo2 from "../images/woocommerce.webp";
import logo1 from "../images/shipstation.webp";
import "./Caros.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Caros = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className="slider" style={{ background: "white" }}>
    //   <div className="slide-tracker">
    //     <div className="slide">
    //       <img className="d-block w-12 " src={logo6} alt="Third slide" />
    //     </div>
    // <div className="slide">
    //   <img className="d-block w-12 " src={logo5} alt="Third slide" />
    // </div>
    //     <div className="slide">
    //       <img className="d-block w-12 " src={logo4} alt="Third slide" />
    //     </div>
    //     <div className="slide">
    //       <img className="d-block w-12 " src={logo3} alt="Third slide" />
    //     </div>
    //     <div className="slide">
    //       <img className="d-block w-12 " src={logo2} alt="Third slide" />
    //     </div>
    //     <div className="slide">
    //       <img className="d-block w-12 " src={logo1} alt="Third slide" />
    //     </div>
    //   </div>
    // </div>
    <div className="slider-container" style={{ background: "white" }}>
      <h1 className="title-underline center">OUR CLIENTS</h1>
      <Slider {...settings} className="slide-tracker">
        <div className="slide">
          <img className="d-block w-12 " src={logo1} alt="Third slide" />
        </div>
        <div className="slide">
          <img className="d-block w-12 " src={logo2} alt="Third slide" />
        </div>
        <div className="slide">
          <img className="d-block w-12 " src={logo3} alt="Third slide" />
        </div>
        <div className="slide">
          <img className="d-block w-12 " src={logo4} alt="Third slide" />
        </div>
        <div className="slide">
          <img className="d-block w-12 " src={logo5} alt="Third slide" />
        </div>
        <div className="slide">
          <img className="d-block w-12 " src={logo6} alt="Third slide" />
        </div>
      </Slider>
    </div>
  );
};

export default Caros;

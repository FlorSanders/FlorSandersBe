import React from "react";
import PropTypes from "prop-types";
import SlickSlider from "react-slick";

function Slider({ children, random, ...props }) {
  const nSlides = children?.length || 1;
  const randomSlide = Math.floor(Math.random() * nSlides);

  const settings = {
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: random ? randomSlide : 0,
  };

  return (
    <SlickSlider {...settings} {...props}>
      {children}
    </SlickSlider>
  );
}

Slider.propTypes = {
  children: PropTypes.node,
  random: PropTypes.bool,
};

export default Slider;

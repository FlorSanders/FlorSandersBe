import React from "react";
import PropTypes from "prop-types";
import { Section, Slider } from ".";

function SliderSection({ title, children, className, random, ...props }) {
  return (
    <Section
      title={title}
      className={className}
      itemType="https://schema.org/ItemList"
      {...props}
    >
      <Slider random={random}>{children}</Slider>
    </Section>
  );
}

SliderSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  random: PropTypes.bool,
  className: PropTypes.string,
};

export default SliderSection;

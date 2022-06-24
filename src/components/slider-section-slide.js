import React from "react";
import PropTypes from "prop-types";
import { HorizontalContent } from ".";

function SectionSlide({ title, children, flip, image, ...props }) {
  return (
    <div className="sm:px-4" {...props}>
      <HorizontalContent image={image} flip={flip}>
        <h3 className="text-2xl font-poppins text-center">{title}</h3>
        {children}
      </HorizontalContent>
    </div>
  );
}

SectionSlide.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  flip: PropTypes.bool,
  image: PropTypes.node,
};

export default SectionSlide;

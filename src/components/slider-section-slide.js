import React from "react";
import PropTypes from "prop-types";
import { HorizontalContent, H3 } from ".";

function SectionSlide({ title, children, flip, image, ...props }) {
  return (
    <div
      className="sm:px-4"
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      {...props}
    >
      <HorizontalContent image={image} flip={flip}>
        <H3 className="text-center" itemProp="name">
          {title}
        </H3>
        <span itemProp="description">{children}</span>
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

import React from "react";
import PropTypes from "prop-types";
import { Section, HorizontalContent } from ".";

function HorizontalSection({
  title,
  className,
  flip,
  image,
  children,
  ...props
}) {
  return (
    <Section title={title} className={className} {...props}>
      <HorizontalContent image={image} flip={flip}>
        {children}
      </HorizontalContent>
    </Section>
  );
}

HorizontalSection.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  flip: PropTypes.bool,
  image: PropTypes.node,
  children: PropTypes.node,
};

export default HorizontalSection;

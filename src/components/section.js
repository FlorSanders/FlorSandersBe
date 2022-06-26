import React from "react";
import PropTypes from "prop-types";
import { H1 } from ".";

function Section({ title, children, className, ...props }) {
  return (
    <section
      className={`space-y-6 py-8 sm:py-12 md:py-16 ${className}`}
      {...props}
    >
      {title ? <H1 className="text-center">{title}</H1> : null}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;

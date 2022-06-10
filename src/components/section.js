import React from "react";
import PropTypes from "prop-types";

function Section({ title, children, className, ...props }) {
  return (
    <section className={`space-y-6 py-16 ${className}`} {...props}>
      {title ? (
        <h2 className={`font-poppins text-4xl text-center`}>{title}</h2>
      ) : null}
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

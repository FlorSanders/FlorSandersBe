import React from "react";
import PropTypes from "prop-types";

const hClassName = "font-poppins pt-2";
const hPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// Heading 1
function H1({ children, className, ...props }) {
  return (
    <h1 className={`${hClassName} text-4xl ${className}`} {...props}>
      {children}
    </h1>
  );
}
H1.propTypes = hPropTypes;

// Heading 2
function H2({ children, className, ...props }) {
  return (
    <h2 className={`${hClassName} text-3xl ${className}`} {...props}>
      {children}
    </h2>
  );
}
H2.propTypes = hPropTypes;

// Heading 3
function H3({ children, className, ...props }) {
  return (
    <h3 className={`${hClassName} text-2xl ${className}`} {...props}>
      {children}
    </h3>
  );
}
H3.propTypes = hPropTypes;

// Heading 4
function H4({ children, className, ...props }) {
  return (
    <h4 className={`${hClassName} text-xl ${className}`} {...props}>
      {children}
    </h4>
  );
}
H4.propTypes = hPropTypes;

// Heading 5
function H5({ children, className, ...props }) {
  return (
    <h5 className={`${hClassName} text-xl ${className}`} {...props}>
      {children}
    </h5>
  );
}
H5.propTypes = hPropTypes;

// Heading 6
function H6({ children, className, ...props }) {
  return (
    <h6 className={`${hClassName} text-xl ${className}`} {...props}>
      {children}
    </h6>
  );
}
H6.propTypes = hPropTypes;

export { H1, H2, H3, H4, H5, H6 };

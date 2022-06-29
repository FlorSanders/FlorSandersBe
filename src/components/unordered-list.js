import React from "react";
import PropTypes from "prop-types";

function Ul({ children, className, ...props }) {
  return (
    <ul className={`list-disc list-inside ${className}`} {...props}>
      {children}
    </ul>
  );
}

Ul.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Ul;

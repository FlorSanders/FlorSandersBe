import React from "react";
import PropTypes from "prop-types";

function Ol({ children, className, ...props }) {
  return (
    <ol className={`list-decimal list-inside ${className}`} {...props}>
      {children}
    </ol>
  );
}

Ol.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Ol;

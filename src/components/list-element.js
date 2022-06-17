import React from "react";
import PropTypes from "prop-types";

function Li({ children, className, ...props }) {
  return (
    <li className={`font-poppins text-lg text-justify ${className}`} {...props}>
      {children}
    </li>
  );
}

Li.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Li;

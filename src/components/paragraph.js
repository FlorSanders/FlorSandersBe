import React from "react";
import PropTypes from "prop-types";

function P({ children, className, ...props }) {
  return (
    <p
      className={`text-justify text-lg break-words font-poppins ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

P.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default P;

import React from "react";
import PropTypes from "prop-types";

function P({ children, className, ...props }) {
  return (
    <p
      className={`text-justify text-md md:text-lg font-poppins ${className}`}
      style={{ hyphens: "auto" }}
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

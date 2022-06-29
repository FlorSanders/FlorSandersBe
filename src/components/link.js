import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

function A({ to, children, className, ...props }) {
  const _className = `font-poppins hover:underline ${className}`;

  if (to[0] === "/") {
    return (
      <Link to={to} className={_className} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={_className}
        {...props}
      >
        {children}
      </a>
    );
  }
}

A.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default A;

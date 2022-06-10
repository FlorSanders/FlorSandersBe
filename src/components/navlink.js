import React from "react";
import PropTypes from "prop-types";
import { A } from ".";

const sizeClassNames = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

function Navlink({ to, children, size, className, ...props }) {
  const sizeClassName = size ? sizeClassNames[size] : "";
  const _className = `block hover:bg-gray-100 w-44 py-2 rounded-lg transition-colors duration-300 hover:no-underline ${sizeClassName} ${className}`;

  return (
    <A className={_className} to={to} {...props}>
      {children}
    </A>
  );
}

Navlink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  className: PropTypes.string,
};

export default Navlink;

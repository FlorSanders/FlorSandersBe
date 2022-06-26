import React from "react";
import PropTypes from "prop-types";
import { H3 } from ".";

function SectionColumn({ icon, title, className, children, ...props }) {
  return (
    <li className={`space-y-2 py-2 sm:px-5 ${className}`} {...props}>
      <div className="w-full text-7xl flex items-center justify-center">
        {icon}
      </div>
      <H3 className="text-center">{title}</H3>
      {children}
    </li>
  );
}

SectionColumn.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SectionColumn;

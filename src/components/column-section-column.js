import React from "react";
import PropTypes from "prop-types";

function SectionColumn({ icon, title, className, children, ...props }) {
  return (
    <li className={`space-y-2 px-5 ${className}`} {...props}>
      <div className="w-full text-7xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-poppins text-center">{title}</h3>
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

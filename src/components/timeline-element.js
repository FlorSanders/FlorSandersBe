import React from "react";
import PropTypes from "prop-types";

function TimelineElement({
  children,
  description,
  className,
  index,
  ...props
}) {
  return (
    <div
      className={`hover:child-opacity-100 relative w-full flex items-center ${
        index % 2 ? "flex-row-reverse" : "flex-row"
      } `}
      // hover:child-opacity-100 is a custom className defined in `../styles/global.css`
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <div
        className={`hidden lg:flex opacity-0 transition-opacity duration-300 lg:flex-col lg:flex-1 ${
          index % 2 ? "" : "items-end"
        }`}
      >
        <div className="w-3/4 mx-6" itemProp="description">
          {description}
        </div>
      </div>
      <div
        className="left-timeline absolute top-8 w-8 h-8 z-10 bg-white dark:bg-gray-900 border-black dark:border-white border-4 rounded-full"
        // left-timeline is a custom className defined in `../styles/global.css`
      />
      <div
        className={`ml-12 lg:ml-0 flex-1 flex flex-col border-black dark:border-white border-l-8 ${
          index % 2 ? "lg:border-r-8 lg:border-l-0" : ""
        }`}
      >
        <div
          className={`w-3/4 mx-6 py-8 flex flex-col space-y-1 ${
            index % 2 ? "lg:self-end lg:items-end" : ""
          } ${className}`}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

TimelineElement.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  className: PropTypes.string,
  index: PropTypes.number,
};

export default TimelineElement;

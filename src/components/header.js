import React from "react";
import PropTypes from "prop-types";
import { Navbar } from ".";

function header({ links, children, page, image, theme, ...props }) {
  return (
    <div {...props}>
      <Navbar links={links} active={page} theme={theme} />
      <div className="w-full relative">
        {image}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  children: PropTypes.node,
  page: PropTypes.string,
  theme: PropTypes.array.isRequired,
};

export default header;

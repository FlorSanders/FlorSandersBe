import React from "react";
import PropTypes from "prop-types";
import { Navbar } from ".";

function header({ links, children, page, image, ...props }) {
  return (
    <header {...props}>
      <Navbar links={links} active={page} />
      <div className="w-full relative">
        {image}
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </header>
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
};

export default header;

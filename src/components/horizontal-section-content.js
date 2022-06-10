import React from "react";
import PropTypes from "prop-types";

function HorizontalContent({ children, image, flip, className, ...props }) {
  const textContent = (
    <div className="space-y-2 flex-grow flex flex-col justify-center">
      {children}
    </div>
  );

  const content = flip ? (
    <>
      {textContent}
      <div className="md:ml-10">{image}</div>
    </>
  ) : (
    <>
      <div className="md:mr-10">{image}</div>
      {textContent}
    </>
  );

  return (
    <div
      className={`flex ${
        flip ? "flex-col-reverse" : "flex-col"
      } items-center justify-center md:flex-row ${className}`}
      {...props}
    >
      {content}
    </div>
  );
}

HorizontalContent.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  className: PropTypes.string,
  flip: PropTypes.bool,
};

export default HorizontalContent;

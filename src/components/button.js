import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick, isDisabled, className, ...props }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (!isDisabled && onClick) onClick();
      }}
      className={`font-poppins text-lg block min-w-28 py-2 rounded-lg transition-colors duration-300 ${
        isDisabled ? "" : "hover:bg-gray-100"
      } ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;

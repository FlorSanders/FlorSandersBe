import React from "react";
import PropTypes from "prop-types";

function Input({ value, placeholder, onChange, className, ...props }) {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      className={`border border-black dark:border-white dark:text-black p-2 rounded-lg min-w-min ${className}`}
      {...props}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;

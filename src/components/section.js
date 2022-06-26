import React from "react";
import PropTypes from "prop-types";
import { H1 } from ".";

function Section({ title, children, className, itemType, ...props }) {
  return (
    <section
      className={`space-y-6 py-8 sm:py-12 md:py-16 ${className}`}
      itemScope
      itemType={itemType || "https://schema.org/WebPageElement"}
      {...props}
    >
      {title ? (
        <H1 className="text-center" itemProp="name">
          {title}
        </H1>
      ) : null}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  itemType: PropTypes.string,
};

export default Section;

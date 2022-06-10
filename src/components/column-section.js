import React from "react";
import PropTypes from "prop-types";
import { Section } from ".";

const nColsClassNames = [
  null,
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
];

function ColumnSection({ title, className, children, nCols, ...props }) {
  const nColsClassName =
    nCols && nCols !== 0 && nCols < nColsClassNames.length
      ? nColsClassNames[nCols]
      : "grid-cols-3";

  return (
    <Section title={title} {...props}>
      <ul className={`grid ${className ? className : nColsClassName}`}>
        {children}
      </ul>
    </Section>
  );
}

ColumnSection.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  nCols: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

export default ColumnSection;

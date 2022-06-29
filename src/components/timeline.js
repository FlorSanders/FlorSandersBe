import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Timeline({ children, pageSize, className, ...props }) {
  // References
  const endOfTimeline = useRef(null);
  // State
  const [limit, setLimit] = useState(pageSize);
  // Effects
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setLimit((limit) => limit + pageSize);
      }
    }, options);
    if (endOfTimeline.current) {
      observer.observe(endOfTimeline.current);
    }
  }, [pageSize]);

  return (
    <div
      className={`w-full flex flex-col ${className}`}
      itemScope
      itemType="https://schema.org/ItemList"
      {...props}
    >
      <div className="w-12 h-2 bg-black dark:bg-white rounded-lg relative left-7 lg:self-center lg:left-0" />
      {children.slice(0, limit)}
      {limit < children.length - 1 ? (
        <div className="border-dashed border-4 border-black dark:border-white relative left-12 h-12 w-0 lg:self-center lg:left-0" />
      ) : null}
      <div
        className="w-12 h-2 bg-black dark:bg-white rounded-lg relative left-7 lg:self-center lg:left-0"
        ref={endOfTimeline}
      />
    </div>
  );
}

Timeline.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageSize: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Timeline;

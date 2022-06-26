import React from "react";
import PropTypes from "prop-types";
import { Button } from ".";

function Pagination({ page, setPage, maxPage, className, ...props }) {
  return (
    <div
      className="grid grid-cols-3 items-center justify-center"
      {...props}
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <Button
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="col-span-1 md:mx-4"
      >
        previous
      </Button>
      <p className="invisible md:visible font-poppins text-lg text-center col-span-1 md:mx-4">
        page {page} of {maxPage}
      </p>
      <Button
        isDisabled={page === maxPage}
        onClick={() => setPage(page + 1)}
        className="col-span-1 md:mx-4"
      >
        next
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  maxPage: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;

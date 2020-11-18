import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const pagination = (props) => {
  const { itemCount, PageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pageCount = Math.ceil(itemCount / PageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};
pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  PageSize: PropTypes.number.isRequired,
  onPageChang: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default pagination;

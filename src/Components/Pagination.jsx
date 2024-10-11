import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../Store/postSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, postsPerPage } = useSelector(state => state.posts);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
      {pageNumbers.map(number => (
        <button key={number} className={number === currentPage ? 'active' : ''} onClick={() => handlePageChange(number)}>
          {number}
        </button>
      ))}
      <button disabled={currentPage === pageNumbers.length} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;

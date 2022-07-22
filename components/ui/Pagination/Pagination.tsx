import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const increment = (page: number) => {
    setPage(page + 1);
  };
  const decrement = (page: number) => {
    if (page === 1) return;
    setPage(page - 1);
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => decrement(page)}>
        {'<'}
      </button>
      <p>Page {page}</p>
      <button className={styles.button} onClick={() => increment(page)}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;

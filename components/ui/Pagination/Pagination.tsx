import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  page: number;
  increment: () => void;
  decrement: () => void;
  incrementDisabled: boolean;
  decrementDisabled: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  increment,
  decrement,
  incrementDisabled,
  decrementDisabled,
}) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => decrement()}
        disabled={decrementDisabled}
      >
        {'<'}
      </button>
      <p>Page {page}</p>
      <button
        className={styles.button}
        onClick={() => increment()}
        disabled={incrementDisabled}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;

import React from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  name: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} id={name} placeholder=' ' />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default SearchBar;

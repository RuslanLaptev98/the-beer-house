import React from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  name: string;
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ name, search, setSearch }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        id={name}
        placeholder=' '
        autoComplete='off'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default SearchBar;

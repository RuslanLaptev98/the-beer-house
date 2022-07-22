import React from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  name: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ name, search, setSearch }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        id={name}
        placeholder=' '
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

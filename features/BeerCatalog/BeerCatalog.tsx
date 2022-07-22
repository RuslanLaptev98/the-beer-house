import React from 'react';
import SearchBar from '../../components/ui/SearchBar';
import styles from './BeerCatalog.module.scss';

const BeerCatalog: React.FC = () => {
  return (
    <section className={styles.container}>
      <SearchBar name='Your favourite beer' />
      <article className={styles.list}>List of beers</article>
    </section>
  );
};

export default BeerCatalog;

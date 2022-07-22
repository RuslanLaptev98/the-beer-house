import React, { useEffect } from 'react';
import Link from 'next/link';
import Card from '../../components/ui/Card';
import SearchBar from '../../components/ui/SearchBar';
import styles from './BeerCatalog.module.scss';
import Pagination from '../../components/ui/Pagination';
import { observer } from 'mobx-react-lite';
import catalogStore from '../../stores/catalogStore';
import Loader from '../../components/ui/Loader';

const BeerCatalog: React.FC = () => {
  const {
    beers,
    setBeers,
    search,
    setSearch,
    page,
    decrementPage,
    incrementPage,
  } = catalogStore;

  useEffect(() => {
    setBeers();
  }, [setBeers, page, search]);

  if (beers.length > 0) {
    return (
      <section className={styles.container}>
        <SearchBar
          name='Your favourite beer'
          search={search}
          setSearch={setSearch}
        />
        <Pagination
          page={page}
          increment={incrementPage}
          decrement={decrementPage}
          incrementDisabled={beers.length < 12}
          decrementDisabled={page === 1}
        />
        <article className={styles.list}>
          {beers.map((beer) => (
            <Link key={beer.id} href={`/beer/${beer.id}`}>
              <a>
                <Card beer={beer} />
              </a>
            </Link>
          ))}
        </article>
        <Pagination
          page={page}
          increment={incrementPage}
          decrement={decrementPage}
          incrementDisabled={beers.length < 12}
          decrementDisabled={page === 1}
        />
      </section>
    );
  } else return <Loader />;
};

export default observer(BeerCatalog);

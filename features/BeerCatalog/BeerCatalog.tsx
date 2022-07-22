import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '../../components/ui/Card';
import SearchBar from '../../components/ui/SearchBar';
import styles from './BeerCatalog.module.scss';
import { Beer } from '../../types/Beer';
import axios from 'axios';
import Pagination from '../../components/ui/Pagination';

const BeerCatalog: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers', {
        params: {
          page: page,
          per_page: 12,
          ...(search === '' ? {} : { beer_name: search }),
        },
      })
      .then((res) => setBeers(res.data));
  }, [page, search]);

  return (
    <section className={styles.container}>
      <SearchBar
        name='Your favourite beer'
        search={search}
        setSearch={setSearch}
      />
      <Pagination page={page} setPage={setPage} />
      <article className={styles.list}>
        {beers.map((beer) => (
          <Link key={beer.id} href={`/beer/${beer.id}`}>
            <a>
              <Card beer={beer} />
            </a>
          </Link>
        ))}
      </article>
      <Pagination page={page} setPage={setPage} />
    </section>
  );
};

export default BeerCatalog;

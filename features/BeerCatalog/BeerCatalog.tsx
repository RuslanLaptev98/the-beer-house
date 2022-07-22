import React from 'react';
import axios from 'axios';
import Card from '../../components/ui/Card';
import SearchBar from '../../components/ui/SearchBar';
import styles from './BeerCatalog.module.scss';

const BeerCatalog: React.FC = () => {
  const [beers, setBeers] = React.useState<
    {
      id: number;
      name: string;
      description: string;
      image_url: string;
    }[]
  >([]);
  React.useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((res) => setBeers(res.data));
  }, []);

  return (
    <section className={styles.container}>
      <SearchBar name='Your favourite beer' />
      <article className={styles.list}>
        {beers.map((beer) => (
          <Card key={beer.id} beer={beer} />
        ))}
      </article>
    </section>
  );
};

export default BeerCatalog;
